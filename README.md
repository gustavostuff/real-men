# real-men

Dynamic MEN-stack boilerplate generator with a few [handlebars](https://handlebarsjs.com/)

[![License](http://img.shields.io/:license-MIT-blue.svg)](https://github.com/tavuntu/real-men/blob/master/LICENSE.md)
[![Version](http://img.shields.io/:version-0.1.4-green.svg)](https://github.com/tavuntu/real-men/tags)

### Install

```npm i -g real-men```

### Simple example

```men test1```

The result would be:

[![simple-men-setup.png](https://i.postimg.cc/9Mq1LmSJ/simple-men-setup.png)](https://postimg.cc/8JNh5ST6)

The controller will look like this:

```javascript
'use strict'

var MyItem = require('../models/MyItem.model');

let getAllFromMyItem = (request, response) => {
  MyItem.find({}, (err, data) => {
    if(err) {
      response.status(500).send({
        msg: JSON.stringify(err),
        error: 'Error in app.getAllFromMyItem()' 
      });
    } else {
      if(!data) {
        response.status(404).send({
          msg: 'Nothing to show in MyItem!'
        }); 
      } else {
        response.status(200).send({ data });
      }
    }
  });
};

let saveNewMyItem = (request, response) => {
  var newMyItem = new MyItem({ exampleData: request.body.data });

  newMyItem.save(function (err) {
    if (err) return response.status(500).send('Error saving newMyItem object');
    
    response.status(200).json({error: false, msg: 'newMyItem saved correctly'})
  });
};

module.exports = {
  getAllFromMyItem,
  saveNewMyItem
};
```

The model:

```javascript
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MyItemSchema = Schema({
    exampleData: { type: String, default: 'data example for MyItem' }
});

module.exports = mongoose.model('MyItem', MyItemSchema);// creates document if not exists
```

The routes:

```javascript
'use strict'

var express = require('express');
var MyItemController = require('../controllers/MyItem.controller');
var api = express.Router();

api.get('/getAllFromMyItem', MyItemController.getAllFromMyItem);
api.post('/saveNewMyItem', MyItemController.saveNewMyItem);

module.exports = api;
```

### Specifying entities

Many entities can be specified as long as they're separated by comas __with no spaces__:

```men test2 --entities user,cat```

[![complex-men-setup.png](https://i.postimg.cc/905bK3HV/complex-men-setup.png)](https://postimg.cc/8J4Lf0Cn)

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