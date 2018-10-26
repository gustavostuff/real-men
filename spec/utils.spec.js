const utils = require('../utils')

describe('checks for members and some of their values in utils.js', () => {
  it('should have a cap property', () => {
    expect(utils.cap).toBeTruthy()
  })

  it('should have a dottedLineLength property', () => {
    expect(utils.dottedLineLength).toBeTruthy()
  })

  it('should have a OK_CODE property', () => {
    expect(utils.OK_CODE).toBeTruthy()
  })

  it('should have a logRed property', () => {
    expect(utils.logRed).toBeTruthy()
  })

  it('should have a logGreen property', () => {
    expect(utils.logGreen).toBeTruthy()
  })

  it('should have a logOrange property', () => {
    expect(utils.logOrange).toBeTruthy()
  })

  it('should have a logCyan property', () => {
    expect(utils.logCyan).toBeTruthy()
  })

  it('should have a logMagenta property', () => {
    expect(utils.logMagenta).toBeTruthy()
  })

  it('should have a logYellow property', () => {
    expect(utils.logYellow).toBeTruthy()
  })

  it('should have a logBlue property', () => {
    expect(utils.logBlue).toBeTruthy()
  })

  it('should have a handleAwaitError property', () => {
    expect(utils.handleAwaitError).toBeTruthy()
  })

  // values:

  it('should have the value dottedLineLength equals to 55', () => {
    expect(utils.dottedLineLength).toBe(55);
  })

  it("should have the value OK_CODE equals to 'ok'", () => {
    expect(utils.OK_CODE).toBe('ok');
  })
})
