let cap = text => {
  if (!text || !text.trim()) {
    return ''
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}

let red = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[31m${text}\x1b[0m`
}

let green = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[32m${text}\x1b[0m`
}

let cyan = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[36m${text}\x1b[0m`
}

let magenta = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[35m${text}\x1b[0m`
}

let yellow = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[33m${text}\x1b[0m`
}

let blue = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[34m${text}\x1b[0m`
}

let white = (text, brighter) => {
  return (brighter ? '\x1b[1m' : '') + `\x1b[37m${text}\x1b[0m`
}

let invalidName = name => {
  return !name.match(/^[a-zA-Z_][0-9a-zA-Z_]*$/)
}

module.exports = {
  cap
  ,red
  ,green
  ,cyan
  ,magenta
  ,yellow
  ,blue
  ,white
  ,invalidName
  ,dottedLineLength: 55
  ,OK_CODE: 'ok'
}
