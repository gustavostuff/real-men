const exec = require('child_process').exec
const utils = require('./utils')

const packages = [{
    name: 'express-hbs',
    color: 'red'
  }, {
    name: 'mongoose',
    color: 'yellow'
  }, {
    name: 'body-parser',
    color: 'green'
  }, {
    name: 'express',
    color: 'cyan'
  }
]

let installPackage = item => {
  return new Promise((resolve, reject) => {
    utils[item.color](`  > ${item.name}...`, true)

    exec(`npm i ${item.name} --save`, async (err) => {
      try {
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

let init = folderName => {
  return new Promise((resolve, reject) => {
    utils.white(`--> Installing node dependencies in ${folderName}/`, true)

    exec(`npm init -y`, async (err) => {      
      try {
        await Promise.all(
          packages.map(item => installPackage(item))
        )
        resolve(utils.OK_CODE)
      } catch (err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  init
  ,installPackage
}
