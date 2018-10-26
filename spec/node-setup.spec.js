const nodeSetup = require('../node-setup')

describe('Checks for the expected functions in  node-setup.js', () => {
  it('nodeSetup.getList().init should exist', () => {
    expect(nodeSetup.init).toBeTruthy()
  })

  it('nodeSetup.getList().installExpress should exist', () => {
    expect(nodeSetup.installExpress).toBeTruthy()
  })

  it('nodeSetup.getList().installBodyParser should exist', () => {
    expect(nodeSetup.installBodyParser).toBeTruthy()
  })

  it('nodeSetup.getList().installMongoose should exist', () => {
    expect(nodeSetup.installMongoose).toBeTruthy()
  })

  it('nodeSetup.getList().installHBS should exist', () => {
    expect(nodeSetup.installHBS).toBeTruthy()
  })

  it('nodeSetup.getList().manageErrors should exist', () => {
    expect(nodeSetup.manageErrors).toBeTruthy()
  })

})