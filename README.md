[![logo-real-men.png](https://i.postimg.cc/W1PCGd0h/logo-real-men.png)](https://postimg.cc/YhbdkqnH)

Dynamic MEN-stack boilerplate generator with a few [handlebars](https://handlebarsjs.com/)

[![License](http://img.shields.io/:license-MIT-blue.svg)](https://github.com/tavuntu/real-men/blob/master/LICENSE.md)
[![Version](http://img.shields.io/:npm-1.0.2-green.svg)](https://www.npmjs.com/package/real-men)

### Install

```npm i -g real-men```

### Simple example

```men test1```

The result would be:

[![default-entity.png](https://i.postimg.cc/R0qXWtMd/default-entity.png)](https://postimg.cc/QBGpPHKK)

The controller will look like this:

```javascript
'use strict'

let MyItem = require('../models/MyItem.model')

let getDataFromMyItem = (request, response) => {
  MyItem.find({}, (err, data) => {
    if (err) {
      response.status(500).send({
        msg: JSON.stringify(err),
        error: 'Error in getDataFromMyItem()' 
      })
    } else {
      if (!data) {
        response.status(404).send({
          msg: 'Nothing to show in MyItem!'
        })
      } else {
        response.status(200).json(data)
      }
    }
  })
}

let saveDataToMyItem = (request, response) => {
  let newMyItem = new MyItem({
    data: request.body.data,
  })

  newMyItem.save(function errorSaveDataTo (err) {
    if (err) {
      response.status(500).send('Error saving new MyItem object')
      return
    }
    
    response.status(200).json({
      error: false, msg: `new MyItem saved!`
    })
  })
}

module.exports = {
  getDataFromMyItem,
  saveDataToMyItem
}
```

The model:

```javascript
'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let MyItemSchema = Schema({
  data: { type: String, required: false },
})

// creates document if not exists
module.exports = mongoose.model('MyItem', MyItemSchema)
```

The routes:

```javascript
'use strict'

let express = require('express')
let MyItemController = require('../controllers/MyItem.controller')
let api = express.Router()

api.get('/getDataFromMyItem', MyItemController.getDataFromMyItem)
api.post('/saveDataToMyItem', MyItemController.saveDataToMyItem)

module.exports = api
```

### Specifying entities

Many entities can be specified as long as they're separated by commas __with no spaces__:

```men test1 -e user,cat,cow,coffee```

[![custom-entities.png](https://i.postimg.cc/Ls7vLs5p/custom-entities.png)](https://postimg.cc/WDGMPT0W)


### Attributes specification

By providing a config file to the ```-e``` parameter, a deeper level of customization can be achieved (with no config file, models have only a ```data``` string attribute, not really useful). The config file must have a json extension and it looks like this:

```json
{
  "entities": {
    "user": {
      "name": "String",
      "email": "String",
      "age": "Number"
    },
    "cat": {
      "isItAJerk": "Boolean",
      "catName": "String"
    },
    "cow": {
      "isItHoly": "Boolean",
      "birthday": "Date"
    },
    "coffee": {
      "isDecaf": "Boolean",
      "hasMilk": "Boolean"
    }
  }
}
```

and instead of this:

```men test1 -e user,cat,cow,coffee```

the line would be this:

```men test1 -e myFile.json```


### API tester

The API tester will look different depending on the level of customization (default entity, list of words or a configuration file). For instance, the one for the command ```men test1 -e user,cat,cow,coffee``` would be this:

[![no-file-api-tester.png](https://i.postimg.cc/SKLHGC0h/no-file-api-tester.png)](https://postimg.cc/4Kd8fKNL)

and the one for ```men test1 -e myFile.json``` (using the json above) would look like this:

[![complex-api-tester.png](https://i.postimg.cc/W32CYzjJ/complex-api-tester.png)](https://postimg.cc/XZzspVrV)

## Notes

* The default entity name is 'MyItem' and its model has just a string attribute named ```data```
* Entities have a small API with 2 funcions, one to save data into the collection, the other one to get all from that collection
* Currently, the API tester does have support for String, Number, Date and Boolean types (based on the [moongoose data types](https://mongoosejs.com/docs/schematypes.html)), any type should be functional with the appropriate settings though
* The config file types must always be a string ("String", "Number", "[]", etc.)
* If not given, the default database to connect (or to create) will be ```<your-proyect-name>_DB```, to specify a database use ```--database```
* The default port to run the server is 5501, change it with ```--port```
* Use ```--open``` to automatically open the broswer and test the API
* Entity names and attributes must match ^[a-zA-Z_][0-9a-zA-Z_]*$
* Entity names are always capitalized
* __Mongo daemon (mongod) must be running to be able to create/connect to the DB__
* More info with ```men --help```