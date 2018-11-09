let cap = text => {
  if (!text || !text.trim()) {
    return ''
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}

let logRed = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[31m%s\x1b[0m', text)
}

let logGreen = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[32m%s\x1b[0m', text)
}

let logOrange = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[202m%s\x1b[0m', text)
}

let logCyan = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[36m%s\x1b[0m', text)
}

let logMagenta = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[35m%s\x1b[0m', text)
}

let logYellow = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[33m%s\x1b[0m', text)
}

let logBlue = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[34m%s\x1b[0m', text)
}

let invalidName = name => {
  return !name.match(/^[a-zA-Z_][0-9a-zA-Z_]*$/)
}

handleAwaitError = (ok, error) => {
  if (!ok) {
    console.error(error)
    return error
  }
}

module.exports = {
  cap
  ,logRed
  ,logGreen
  ,logOrange
  ,logCyan
  ,logMagenta
  ,logYellow
  ,logBlue
  ,handleAwaitError
  ,invalidName
  ,dottedLineLength: 55
  ,OK_CODE: 'ok'
}
