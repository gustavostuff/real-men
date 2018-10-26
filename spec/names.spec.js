const names = require('../names.js')

describe('checks functions and values in names.js', () => {
  // check existence of properties:
  
  it('shoud have names.getList()', () => {
    expect(names.getList()).toBeTruthy()
  })

  it('shoud have names.getList().controllersFolder', () => {
    expect(names.getList().controllersFolder).toBeTruthy()
  })

  it('shoud have names.getList().modelsFolder', () => {
    expect(names.getList().modelsFolder).toBeTruthy()
  })

  it('shoud have names.getList().routesFolder', () => {
    expect(names.getList().routesFolder).toBeTruthy()
  })

  it('shoud have names.getList().templatesFolder', () => {
    expect(names.getList().templatesFolder).toBeTruthy()
  })

  it('shoud have names.getList().viewsFolder', () => {
    expect(names.getList().viewsFolder).toBeTruthy()
  })

  it('shoud have names.getList().partialsFolder', () => {
    expect(names.getList().partialsFolder).toBeTruthy()
  })

  it('shoud have names.getList().targetNameJoker', () => {
    expect(names.getList().targetNameJoker).toBeTruthy()
  })

  it('shoud have names.getList().targetImportedRoutes', () => {
    expect(names.getList().targetImportedRoutes).toBeTruthy()
  })

  it('shoud have names.getList().targetAPIConnectedRoutes', () => {
    expect(names.getList().targetAPIConnectedRoutes).toBeTruthy()
  })

  it('shoud have names.getList().targetImportedRoutesList', () => {
    expect(names.getList().targetImportedRoutesList).toBeTruthy()
  })

  it('shoud have names.getList().targetAPIConnectedRoutesList', () => {
    expect(names.getList().targetAPIConnectedRoutesList).toBeTruthy()
  })

  it('shoud have names.getList().targetDBName', () => {
    expect(names.getList().targetDBName).toBeTruthy()
  })

  it('shoud have names.getList().targetEntitiesList', () => {
    expect(names.getList().targetEntitiesList).toBeTruthy()
  })

  it('shoud have names.getList().targetNodePort', () => {
    expect(names.getList().targetNodePort).toBeTruthy()
  })


  // check types (strings here):

  it('names.getList().controllersFolder should be string', () => {
    expect(typeof names.getList().controllersFolder === 'string').toBeTruthy()
  })

  it('names.getList().modelsFolder should be string', () => {
    expect(typeof names.getList().modelsFolder === 'string').toBeTruthy()
  })

  it('names.getList().routesFolder should be string', () => {
    expect(typeof names.getList().routesFolder === 'string').toBeTruthy()
  })

  it('names.getList().templatesFolder should be string', () => {
    expect(typeof names.getList().templatesFolder === 'string').toBeTruthy()
  })

  it('names.getList().viewsFolder should be string', () => {
    expect(typeof names.getList().viewsFolder === 'string').toBeTruthy()
  })

  it('names.getList().partialsFolder should be string', () => {
    expect(typeof names.getList().partialsFolder === 'string').toBeTruthy()
  })

  // RegExp:

  it('names.getList().targetNameJoker should be RegExp', () => {
    expect(names.getList().targetNameJoker instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetImportedRoutes should be RegExp', () => {
    expect(names.getList().targetImportedRoutes instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetAPIConnectedRoutes should be RegExp', () => {
    expect(names.getList().targetAPIConnectedRoutes instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetImportedRoutesList should be RegExp', () => {
    expect(names.getList().targetImportedRoutesList instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetAPIConnectedRoutesList should be RegExp', () => {
    expect(names.getList().targetAPIConnectedRoutesList instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetDBName should be RegExp', () => {
    expect(names.getList().targetDBName instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetEntitiesList should be RegExp', () => {
    expect(names.getList().targetEntitiesList instanceof RegExp).toBeTruthy()
  })

  it('names.getList().targetNodePort should be RegExp', () => {
    expect(names.getList().targetNodePort instanceof RegExp).toBeTruthy()
  })

  // values:

  it('names.getList().controllersFolder should exist', () => {
    expect(names.getList().controllersFolder).toBe(`controllers`)
  })

  it('names.getList().modelsFolder should exist', () => {
    expect(names.getList().modelsFolder).toBe(`models`)
  })

  it('names.getList().routesFolder should exist', () => {
    expect(names.getList().routesFolder).toBe(`routes`)
  })

  it('names.getList().templatesFolder should exist', () => {
    expect(names.getList().templatesFolder).toBe(`templates`)
  })

  it('names.getList().viewsFolder should exist', () => {
    expect(names.getList().viewsFolder).toBe(`views`)
  })

  it('names.getList().partialsFolder should exist', () => {
    expect(names.getList().partialsFolder).toBe(`views/partials`)
  })

  it('names.getList().targetNameJoker should exist', () => {
    expect(names.getList().targetNameJoker.toString()).toBe(String(/__targetNameJoker__/g))
  })

  it('names.getList().targetImportedRoutes should exist', () => {
    expect(names.getList().targetImportedRoutes.toString()).toBe(String(/__targetImportedRoutes__/g))
  })

  it('names.getList().targetAPIConnectedRoutes should exist', () => {
    expect(names.getList().targetAPIConnectedRoutes.toString()).toBe(String(/__targetAPIConnectedRoutes__/g))
  })

  it('names.getList().targetImportedRoutesList should exist', () => {
    expect(names.getList().targetImportedRoutesList.toString()).toBe(String(/__targetImportedRoutesList__/g))
  })

  it('names.getList().targetAPIConnectedRoutesList should exist', () => {
    expect(names.getList().targetAPIConnectedRoutesList.toString()).toBe(String(/__targetAPIConnectedRoutesList__/g))
  })

  it('names.getList().targetDBName should exist', () => {
    expect(names.getList().targetDBName.toString()).toBe(String(/__targetDBName__/g))
  })

  it('names.getList().targetEntitiesList should exist', () => {
    expect(names.getList().targetEntitiesList.toString()).toBe(String(/__targetEntitiesList__/g))
  })

  it('names.getList().targetNodePort should exist', () => {
    expect(names.getList().targetNodePort.toString()).toBe(String(/__targetNodePort__/g))
  })
})