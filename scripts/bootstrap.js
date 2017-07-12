/* eslint-disable no-console */
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const addToMain = require('./utils/addToMain');

const ROOT_FOLDER = path.resolve(process.cwd(), 'src');

const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);

/**
 * Check if module already exists
 * @param  {string}  moduleName Name of module
 * @return {boolean}
 */
async function exists(moduleName) {
  try {
    const directoryPath = path.resolve(ROOT_FOLDER, moduleName);
    await access(directoryPath);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Create the directory for the new module
 * @param  {string}  moduleName Name of module
 * @return {boolean}            If directory was created succsefully or not
 */
async function createModuleDirectory(moduleName) {
  try {
    const directoryPath = path.resolve(ROOT_FOLDER, moduleName);
    await mkdir(directoryPath);

    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Create new files from template
 * @param  {string} template   Template name
 * @param  {string} fileName   Name of new file
 * @param  {string} moduleName Name of module
 * @return {void}
 */
function createFile({ template, fileName, moduleName }) {
  return new Promise((resolve, reject) => {
    const transformer = new Transform({
      transform(chunk, encoding, cb) {
        const string = chunk.toString().replace(/module/g, moduleName);
        this.push(Buffer.from(string));
        cb();
      },
    });

    const readStream = fs.createReadStream(
      path.resolve(__dirname, 'templates', template),
    );
    const writeStream = fs.createWriteStream(
      path.resolve(ROOT_FOLDER, moduleName, fileName),
    );

    readStream
      .pipe(transformer)
      .pipe(writeStream)
      .on('finish', () => resolve())
      .on('error', e => reject(e));
  });
}

async function run(newModuleName) {
  if (!newModuleName)
    throw new Error('You must specify a module name as first argument');

  try {
    const alreadyExists = await exists(newModuleName);
    if (alreadyExists) {
      console.log(`The module '${newModuleName}' already exists.`);
      return;
    }

    const directoryCreated = await createModuleDirectory(newModuleName);
    if (!directoryCreated) {
      console.log(
        `Could not create a new directory for module '${newModuleName}'`,
      );
      return;
    }

    await createFile({
      template: 'index.template.js',
      fileName: 'index.js',
      moduleName: newModuleName,
    });

    await createFile({
      template: 'test.template.js',
      fileName: `${newModuleName}.test.js`,
      moduleName: newModuleName,
    });

    await addToMain(newModuleName);

    console.log(`Bootstraped new module '${newModuleName}'`);
  } catch (e) {
    console.error(e);
  }
}

const [, , moduleName] = process.argv;
run(moduleName);
