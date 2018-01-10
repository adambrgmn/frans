/* eslint-disable import/no-extraneous-dependencies, no-console */
const path = require('path');
const fs = require('fs');
const util = require('util');
const prettier = require('prettier');
const chalk = require('chalk');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const access = util.promisify(fs.access);

const paths = {
  index: () => path.join(process.cwd(), 'src', 'index.js'),
  mod: name => path.join(process.cwd(), 'src', `${name}.js`),
  test: name => path.join(process.cwd(), 'src', '__tests__', `${name}.js`),
};

const templates = {
  mod: name => `const ${name} = () => null;\n\nexport {${name} as default};`,
  test: name =>
    `import ${name} from '../${name}';\n\ndescribe('Core.${name}', () => { test('module will...', () => { expect(${name}()).not.toBe(null); }); });`,
};

const format = code =>
  prettier.format(code, { singleQuote: true, trailingComma: 'es5' });

const checkAccess = async name => {
  try {
    await access(paths.mod(name), fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const regenerateIndex = async (...names) => {
  const content = await readFile(paths.index(), 'utf8');

  const importRegExp = () => /import (\w+) from '\.\/(\w+)';/g;

  const existingImports = content.match(importRegExp());
  const existingModules = existingImports.map(s => importRegExp().exec(s)[1]);

  const allModules = [...existingModules, ...names].sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA > lowerB) return 1;
    if (lowerA < lowerB) return -1;
    return 0;
  });

  const newImport = allModules.reduce(
    (acc, mod) => `${acc} import ${mod} from './${mod}';`,
    '',
  );
  const newExport = `export { ${allModules.join(', ')} }`;

  const newContent = format(`${newImport}\n\n${newExport}`);
  await writeFile(paths.index(), newContent, 'utf8');
};

const createModule = async name => {
  const fileContent = format(templates.mod(name));
  await writeFile(paths.mod(name), fileContent, 'utf8');
};

const createTest = async name => {
  const fileContent = format(templates.test(name));
  await writeFile(paths.test(name), fileContent, 'utf8');
};

const createModuleFiles = name =>
  Promise.all([createModule(name), createTest(name)]);

async function main() {
  try {
    const [, , ...newModules] = process.argv;

    const isCreated = await Promise.all(
      newModules.map(async name => {
        const exists = await checkAccess(name);
        return [name, exists];
      }),
    );

    const modulesToCreate = isCreated.reduce((acc, [name, exists]) => {
      if (exists) {
        console.log(
          `${chalk.red('→')} Module ${chalk.yellow(
            name,
          )} already exists. Will skip creation`,
        );
        return acc;
      }

      return [...acc, name];
    }, []);

    await Promise.all(
      modulesToCreate.map(async name => {
        await createModuleFiles(name);
        console.log(
          `${chalk.green('→')} Created files for ${chalk.blue(name)}`,
        );
      }),
    );

    await regenerateIndex(...modulesToCreate);
    console.log(
      `${chalk.green('→')} Added ${chalk.blue(
        modulesToCreate.join(', '),
      )} to index.js.`,
    );
  } catch (err) {
    console.error(err);
  }
}

main();
