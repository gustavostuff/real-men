const exec = require('child_process').exec
const utils = require('./utils')
const log = require('npmlog')

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
    log.info(utils.white('    > Installing hbs...', true))

    exec(`npm i hbs --save`, async (err, stdout, stderr) => {
      try {
        await manageErrors([err])
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

let installMongoose = () => {
  return new Promise((resolve, reject) => {
    log.info(utils.white('    > Installing mongoose...', true))

    exec(`npm i mongoose --save`, async (err) => {
      try {
        await manageErrors([err])
        await installHBS()
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

let installBodyParser = () => {
  return new Promise((resolve, reject) => {
    log.info(utils.white('    > Installing body-parser...', true))

    exec(`npm i body-parser --save`, async (err) => {
      try {
        await manageErrors([err])
        await installMongoose()
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

let installExpress = () => {
  return new Promise((resolve, reject) => {
    log.info(utils.white('    > Installing express...', true))

    exec(`npm i express --save`, async (err) => {
      try {
        await manageErrors([err])
        await installBodyParser()
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

let init = (folderName) => {
  return new Promise((resolve, reject) => {
    log.info(utils.white(`--> Installing node dependencies in ${folderName}/`, true))

    exec(`npm init -y`, async (err) => {      
      try {
        await manageErrors([err])
        await installExpress()
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  init
  ,installExpress
  ,installBodyParser
  ,installMongoose
  ,installHBS
  ,manageErrors
}
