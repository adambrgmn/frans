/* eslint-disable import/no-extraneous-dependencies, no-console */
const path = require('path');
const fs = require('fs');
const util = require('util');
const prettier = require('prettier');
const chalk = require('chalk');
const cp = require('child_process');
const pkg = require('../package.json');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const access = util.promisify(fs.access);
const exec = util.promisify(cp.exec);

const paths = {
  index: () => path.join(process.cwd(), 'src', 'index.ts'),
  mod: (name) => path.join(process.cwd(), 'src', `${name}.ts`),
  test: (name) => path.join(process.cwd(), 'src', '__tests__', `${name}.ts`),
};

const templates = {
  mod: (name) => `export const ${name} = () => null;\n`,
  test: (name) => {
    return (
      [
        `import { ${name} } from '../${name}';`,
        '',
        `describe('Core.${name}', () => { test('module will...', () => { expect(${name}()).not.toBe(null); }); });`,
      ].join('\n') + '\n'
    );
  },
};

const format = (code) => {
  return prettier.format(code, { ...pkg.prettier, parser: 'babel' });
};

const checkAccess = async (name) => {
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
  const existingModules = existingImports.map((s) => importRegExp().exec(s)[1]);

  const allModules = [...existingModules, ...names].sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA > lowerB) return 1;
    if (lowerA < lowerB) return -1;
    return 0;
  });

  const newImport = allModules.reduce(
    (acc, mod) => `${acc} export * from './${mod}';`,
    '',
  );

  const newContent = format(`${newImport}`);
  await writeFile(paths.index(), newContent, 'utf8');
};

const createModule = async (name) => {
  const fileContent = format(templates.mod(name));
  await writeFile(paths.mod(name), fileContent, 'utf8');
};

const createTest = async (name) => {
  const fileContent = format(templates.test(name));
  await writeFile(paths.test(name), fileContent, 'utf8');
};

const createModuleFiles = (name) => {
  return Promise.all([createModule(name), createTest(name)]);
};

async function main() {
  try {
    const [, , ...newModules] = process.argv;

    const isCreated = await Promise.all(
      newModules.map(async (name) => {
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
      modulesToCreate.map(async (name) => {
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

    try {
      await exec(
        `code ${modulesToCreate
          .reduce(
            (acc, name) => [...acc, paths.mod(name), paths.test(name)],
            [],
          )
          .join(' ')}`,
      );
    } catch (err) {
      // void
    }
  } catch (err) {
    console.error(err);
  }
}

main();
