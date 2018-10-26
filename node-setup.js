const exec = require('child_process').exec
const utils = require('./utils')
const to = require('./to')

let manageErrors = (errors) => {
  return new Promise((resolve, reject) => {
    errors.forEach((err) => {
      if (err) {
        reject(err)
      }
    })

    resolve(utils.OK_CODE)
  })
}

let installHBS = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing hbs...')

    exec(`npm i hbs --save`, async (err, stdout, stderr) => {
      let error1, ok;
      [error1, ok] = await to(manageErrors([err]))

      if (!ok || error1) {
        reject(error1)
      } else {
        resolve(utils.OK_CODE)
      }
    })
  })
}

let installMongoose = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing mongoose...')

    exec(`npm i mongoose --save`, async (err) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installHBS())

      if (!ok || error1 || error2) {
        reject(new Error('Error while installing mongoose'))
      } else {
        resolve(utils.OK_CODE)
      }
    })
  })
}

let installBodyParser = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing body-parser...')

    exec(`npm i body-parser --save`, async (err) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installMongoose())

      if (!ok || error1 || error2) {
        reject(new Error('Error while installing body-parser'))
      } else {
        resolve(utils.OK_CODE)
      }
    })
  })
}

let installExpress = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing express...')

    exec(`npm i express --save`, async (err) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installBodyParser())

      if (!ok || error1 || error2) {
        reject(new Error('Error while installing express'))
      } else {
        resolve(utils.OK_CODE)
      }
    })
  })
}

let init = (folderName) => {
  return new Promise((resolve, reject) => {
    console.log(`--> Intalling node dependencies in ${folderName}/`)

    exec(`npm init -y`, async (err) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installExpress())

      if (!ok || error1 || error2) {
        reject(new Error('Error while initializing project'))
      } else {
        resolve(utils.OK_CODE)
      }
    })
  })
}

module.exports = {
  init,
  installExpress,
  installBodyParser,
  installMongoose,
  installHBS,
  manageErrors
}
