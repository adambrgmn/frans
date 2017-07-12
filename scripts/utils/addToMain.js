const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const getModules = fileContent => {
  const regExp = /\.\/(\w*)/g;
  const moduleNames = fileContent.match(regExp);
  return moduleNames.map(str => str.replace('./', ''));
};

const createImportStatements = modules =>
  modules.map(module => `import _${module} from './${module}';`);

const createExportStatements = modules =>
  modules.map(module => `export const ${module} = _${module};`);

async function addToMain(moduleName) {
  const mainPath = path.resolve(process.cwd(), 'src', 'main.js');
  const mainContent = await readFile(mainPath, 'utf-8');
  const moduleNames = [...getModules(mainContent), moduleName].sort();

  const importStatements = createImportStatements(moduleNames);
  const exportStatements = createExportStatements(moduleNames);

  const fileContent = `// @flow
${importStatements.join('\n')}

${exportStatements.join('\n')}
`;

  await writeFile(mainPath, fileContent, 'utf-8');

  return fileContent;
}

module.exports = addToMain;
