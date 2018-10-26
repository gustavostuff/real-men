const template = require('../template')

describe('check properties in template.js', () => {
  it('should have a getList function', () => {
    expect(template.getList).toBeTruthy()
  })

  it('should have a modelTemplate property', () => {
    expect(template.getList('templates').modelTemplate).toBeTruthy()
  })

  it('should have a routesTemplate property', () => {
    expect(template.getList('templates').routesTemplate).toBeTruthy()
  })

  it('should have a appTemplate property', () => {
    expect(template.getList('templates').appTemplate).toBeTruthy()
  })

  it('should have a indexTemplate property', () => {
    expect(template.getList('templates').indexTemplate).toBeTruthy()
  })

  it('should have a importedRoutesLine property', () => {
    expect(template.getList('templates').importedRoutesLine).toBeTruthy()
  })

  it('should have a apiConnectedRoutesLine property', () => {
    expect(template.getList('templates').apiConnectedRoutesLine).toBeTruthy()
  })

  it('should have a apiTesterTemplate property', () => {
    expect(template.getList('templates').apiTesterTemplate).toBeTruthy()
  })

  it('should have a apiTesterBlock property', () => {
    expect(template.getList('templates').apiTesterBlock).toBeTruthy()
  })

  it('should have a apiTesterCSS property', () => {
    expect(template.getList('templates').apiTesterCSS).toBeTruthy()
  })
})
