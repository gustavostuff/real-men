[![real-men.png](https://i.postimg.cc/vmJhbcL6/real-men.png)](https://postimg.cc/d79r9Qfq)

MEN stack API generator

[![License](http://img.shields.io/:license-MIT-blue.svg)](https://github.com/tavuntu/real-men/blob/master/LICENSE.md)
[![Version](http://img.shields.io/:npm-1.1.5-green.svg)](https://www.npmjs.com/package/real-men)

### Installation

```npm i -g real-men```

(if npm is not installed you will need [Node.js](https://nodejs.org))

### Simple example

```men test1```

The result would be:

[![Screen-Shot-2019-05-28-at-3-14-50-PM.png](https://i.postimg.cc/fLCdZY03/Screen-Shot-2019-05-28-at-3-14-50-PM.png)](https://postimg.cc/ph9rJhCx)

where each controller (only one in this case) will have the typical CRUD functions:

  * **GET: getAllFromItem** (gets all documents from a given collection)
  * **GET: getOneItem** (gets only one, given an id)
  * **POST: saveNewItem** (saves a new document)
  * **PUT: updateItem** (updates a document)
  * **DELETE: deleteItem** (deletes a document)

### Specifying entities

Many entities can be specified (being an entity the union **controller** + **model** + **routes**) as long as they're separated by commas __with no spaces__, for instance:

```men test1 -e user,cat,cow,coffee```

will generate:

[![Screen-Shot-2019-05-28-at-3-25-52-PM.png](https://i.postimg.cc/pdYhYKC0/Screen-Shot-2019-05-28-at-3-25-52-PM.png)](https://postimg.cc/WDz1sFQr)

### Attributes specification

For a more specific data structure, a configuration file is needed. Such file **must have a json** extension and it looks like this:

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

the line would be:

```men test1 -e customMapping.json```

### API tester

The API tester will look different depending on the level of detail specified (being the highest the config file). For instance, the one for ```men test1 -e user,cat,cow,coffee``` would be:

[![Screen-Shot-2019-07-10-at-10-49-54-AM.png](https://i.postimg.cc/QMbByhYF/Screen-Shot-2019-07-10-at-10-49-54-AM.png)](https://postimg.cc/f3VT3nNs)

and the one for ```men test1 -e customMapping.json``` would look like this (note that some data has been added):

[![Screen-Shot-2019-07-10-at-10-50-40-AM.png](https://i.postimg.cc/mkRTfHcR/Screen-Shot-2019-07-10-at-10-50-40-AM.png)](https://postimg.cc/Q962cVkn)

## Notes

* The default entity name is 'Item' and its model has just a string attribute: ```data```
* Currently, the API tester does have support for String, Number, Date and Boolean types (based on the [moongoose SchemaTypes](https://mongoosejs.com/docs/schematypes.html)), any type should be functional with the appropriate settings though
* The config file attribute types must always be strings ("String", "Number", "[]", etc.)
* If not given, the default database to connect/create will be ```<your-proyect-name>_DB```, to specify a database use ```--database``` or ```-d```
* The default port to run the server is 5501, change it with ```--port``` or ```-p```
* Use ```--open``` or ```-o``` to automatically open the broswer and test the API
* Entity names and attributes must match ```^[a-zA-Z_][0-9a-zA-Z_]*$```
* Entity names are automatically capitalized
* __Mongo daemon (mongod) must be running to be able to create/connect to the DB__
* More info with ```men --help```