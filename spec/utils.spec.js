const utils = require('../src/utils')

describe('checks for members and of their values in utils.js', () => {
  it('should have a cap property', () => {
    expect(utils.cap).toBeTruthy()
  })

  it('should have a dottedLineLength property', () => {
    expect(utils.dottedLineLength).toBeTruthy()
  })

  it('should have a OK_CODE property', () => {
    expect(utils.OK_CODE).toBeTruthy()
  })

  it('should have a red property', () => {
    expect(utils.red).toBeTruthy()
  })

  it('should have a green property', () => {
    expect(utils.green).toBeTruthy()
  })

  it('should have a cyan property', () => {
    expect(utils.cyan).toBeTruthy()
  })

  it('should have a magenta property', () => {
    expect(utils.magenta).toBeTruthy()
  })

  it('should have a yellow property', () => {
    expect(utils.yellow).toBeTruthy()
  })

  it('should have a blue property', () => {
    expect(utils.blue).toBeTruthy()
  })

  it('should have a white property', () => {
    expect(utils.white).toBeTruthy()
  })

  // values:

  it("should return utils.cap('dog') = 'Dog'", () => {
    expect(utils.cap('dog')).toBe('Dog')
  })

  it('should have the value dottedLineLength equals to 55', () => {
    expect(utils.dottedLineLength).toBe(55);
  })

  it("should have the value OK_CODE equals to 'ok'", () => {
    expect(utils.OK_CODE).toBe('ok');
  })

  // normal colors:

  it("should have a OK_CODE equals to 'ok'", () => {
    expect(utils.OK_CODE).toBe('ok')
  })

  it('should have a logRed property', () => {
    expect(utils.red('text')).toBe('\x1b[31mtext\x1b[0m')
  })

  it('should have a logGreen property', () => {
    expect(utils.green('text')).toBe('\x1b[32mtext\x1b[0m')
  })

  it('should have a logCyan property', () => {
    expect(utils.cyan('text')).toBe('\x1b[36mtext\x1b[0m')
  })

  it('should have a logMagenta property', () => {
    expect(utils.magenta('text')).toBe('\x1b[35mtext\x1b[0m')
  })

  it('should have a logYellow property', () => {
    expect(utils.yellow('text')).toBe('\x1b[33mtext\x1b[0m')
  })

  it('should have a logBlue property', () => {
    expect(utils.blue('text')).toBe('\x1b[34mtext\x1b[0m')
  })

  it('should have a logBlue property', () => {
    expect(utils.white('text')).toBe('\x1b[37mtext\x1b[0m')
  })

  // brighter colors:

  it("should have a OK_CODE equals to 'ok'", () => {
    expect(utils.OK_CODE).toBe('ok')
  })

  it('should have a logRed property', () => {
    expect(utils.red('text', true)).toBe('\x1b[1m\x1b[31mtext\x1b[0m')
  })

  it('should have a logGreen property', () => {
    expect(utils.green('text', true)).toBe('\x1b[1m\x1b[32mtext\x1b[0m')
  })

  it('should have a logCyan property', () => {
    expect(utils.cyan('text', true)).toBe('\x1b[1m\x1b[36mtext\x1b[0m')
  })

  it('should have a logMagenta property', () => {
    expect(utils.magenta('text', true)).toBe('\x1b[1m\x1b[35mtext\x1b[0m')
  })

  it('should have a logYellow property', () => {
    expect(utils.yellow('text', true)).toBe('\x1b[1m\x1b[33mtext\x1b[0m')
  })

  it('should have a logBlue property', () => {
    expect(utils.blue('text', true)).toBe('\x1b[1m\x1b[34mtext\x1b[0m')
  })

  it('should have a logBlue property', () => {
    expect(utils.white('text', true)).toBe('\x1b[1m\x1b[37mtext\x1b[0m')
  })
})
