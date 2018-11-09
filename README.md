[![logo-real-men.png](https://i.postimg.cc/W1PCGd0h/logo-real-men.png)](https://postimg.cc/YhbdkqnH)

Dynamic MEN-stack boilerplate generator with a few [handlebars](https://handlebarsjs.com/)

[![License](http://img.shields.io/:license-MIT-blue.svg)](https://github.com/tavuntu/real-men/blob/master/LICENSE.md)
[![Version](http://img.shields.io/:version-0.2.3-green.svg)](https://github.com/tavuntu/real-men/tags)

### Install

```npm i -g real-men```

### Simple example

```men test1```

The result would be:

[![test1.png](https://i.postimg.cc/8kJLMKyy/test1.png)](https://postimg.cc/V5wScRPM)

The controller will look like this:

```javascript
'use strict'

let MyItem = require('../models/MyItem.model')

let getAllFromMyItem = (request, response) => {
  MyItem.find({}, (err, data) => {
    if (err) {
      response.status(500).send({
        msg: JSON.stringify(err),
        error: 'Error in app.getAllFromMyItem()' 
      })
    } else {
      if (!data) {
        response.status(404).send({
          msg: 'Nothing to show in MyItem!'
        })
      } else {
        response.status(200).send({ data })
      }
    }
  })
}

let saveNewMyItem = (request, response) => {
  let newMyItem = new MyItem({
    data: request.body.data
  })

  newMyItem.save(function errorCtrlSaveNew (err) {
    if (err) {
      response.status(500).send('Error saving new MyItem object')
      return
    }
    
    response.status(200).json({
      error: false, msg: 'new MyItem saved! (${request.body.data})'
    })
  })
}

module.exports = {
  getAllFromMyItem,
  saveNewMyItem
}
```

The model:

```javascript
'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let MyItemSchema = Schema({
  data: {
    type: String,
    default: 'data example for MyItem'
  }
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

api.get('/getAllFromMyItem', MyItemController.getAllFromMyItem)
api.post('/saveNewMyItem', MyItemController.saveNewMyItem)

module.exports = api
```

### Specifying entities

Many entities can be specified as long as they're separated by commas __with no spaces__:

```men test2 --entities user,cat```

[![test2.png](https://i.postimg.cc/JzmJw1Rg/test2.png)](https://postimg.cc/cr96wGgM)

### API tester

When opening the broswer in the given URL, the API tester will be shown. The one for the previous example would be:

[![api-tester.png](https://i.postimg.cc/jj1Z6w8D/api-tester.png)](https://postimg.cc/R3c74Fxm)

## Notes

* The default entity name is 'MyItem'
* Entities have a small API with 2 funcions, one to save data into the collection, the other one to get all from that collection
* If not given, the default database to connect (or to create) will be ```<your-proyect-name>_DB```, to specify a database use ```--database```
* The default port to run the server is 5501, change it with ```--port```
* Use ```--open``` to automatically open the broswer and test the API
* __Mongo daemon (mongod) must be running to be able to create and connect to the DB__
* [handlebars](https://handlebarsjs.com/) is used within the generated project just for the API tester, the project can be connected to any HTTP client
* More info with ```men --help```