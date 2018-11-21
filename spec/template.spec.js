const template = require('../src/template')
const names = require('../src/names')

describe('check properties in template.js', () => {
  let dir = `./${names.getList().templatesFolder}`
  it('should have a getList function', () => {
    expect(template.getList).toBeTruthy()
  })

  it('should have a modelTemplate property', () => {
    expect(template.getList(dir).modelTemplate).toBeTruthy()
  })

  it('should have a routesTemplate property', () => {
    expect(template.getList(dir).routesTemplate).toBeTruthy()
  })

  it('should have a appTemplate property', () => {
    expect(template.getList(dir).appTemplate).toBeTruthy()
  })

  it('should have a indexTemplate property', () => {
    expect(template.getList(dir).indexTemplate).toBeTruthy()
  })

  it('should have a importedRoutesLine property', () => {
    expect(template.getList(dir).importedRoutesLine).toBeTruthy()
  })

  it('should have a apiConnectedRoutesLine property', () => {
    expect(template.getList(dir).apiConnectedRoutesLine).toBeTruthy()
  })

  it('should have a apiTesterTemplate property', () => {
    expect(template.getList(dir).apiTesterTemplate).toBeTruthy()
  })

  it('should have a apiTesterBlock property', () => {
    expect(template.getList(dir).apiTesterBlock).toBeTruthy()
  })

  it('should have a apiTesterCSS property', () => {
    expect(template.getList(dir).apiTesterCSS).toBeTruthy()
  })
})
