'use strict'

let fs = require('fs')

let getList = (folder) => {
  return {
    controllerTemplate: fs.readFileSync(`${folder}/controller.template`, 'utf-8')
    ,saveKeyValueLineTemplate: fs.readFileSync(`${folder}/save-key-value-line.template`, 'utf-8')
    ,modelAttributesTemplate: fs.readFileSync(`${folder}/model-attributes.template`, 'utf-8')
    ,modelTemplate: fs.readFileSync(`${folder}/model.template`, 'utf-8')
    ,routesTemplate: fs.readFileSync(`${folder}/routes.template`, 'utf-8')
    ,appTemplate: fs.readFileSync(`${folder}/app.template`, 'utf-8')
    ,dbTemplate: fs.readFileSync(`${folder}/db.template`, 'utf-8')
    ,indexTemplate: fs.readFileSync(`${folder}/index.template`, 'utf-8')
    ,importedRoutesLine: fs.readFileSync(`${folder}/imported-routes-line.template`, 'utf-8')
    ,apiConnectedRoutesLine: fs.readFileSync(`${folder}/api-connected-routes-line.template`, 'utf-8')
    ,apiTesterTemplate: fs.readFileSync(`${folder}/api-tester.template`, 'utf-8')
    ,apiTesterBlock: fs.readFileSync(`${folder}/api-tester-block.template`, 'utf-8')
    ,apiTesterCSS: fs.readFileSync(`${folder}/api-tester-css.template`, 'utf-8')
  }
}

module.exports = {
  getList
}
