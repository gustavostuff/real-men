const { getErrors } = require('../src/entity-validator')

describe('checks the functionality of entity-validator.js', () => {
  let testOK = {
    entities: {
      dog: {
        name: "String",
        age: "Number"
      }
    }
  }

  let testWrongNames = {
    entities: {
      "5dog": {
        name: "String",
        "ag-e": "Number"
      }
    }
  }

  let testEmptyEntity = {
    entities: {
      dog: {}
    }
  }

  it(`should return no errors from ${JSON.stringify(testOK)}`, () => {
    expect(getErrors(testOK)).toBeFalsy()
  })

  it(`should return an error from ${JSON.stringify(testWrongNames)}`, () => {
    expect(getErrors(testWrongNames)).toBeTruthy()
  })

  it(`should return an error from ${JSON.stringify(testEmptyEntity)}`, () => {
    expect(getErrors(testEmptyEntity)).toBeTruthy()
  })
})