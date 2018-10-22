cap = (text) => {
  if(!text || !text.trim()) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

logRed = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[31m%s\x1b[0m', text);
};

logGreen = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[32m%s\x1b[0m', text);
};

logOrange = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[202m%s\x1b[0m', text);
};

logCyan = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[36m%s\x1b[0m', text);
};

logMagenta = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[35m%s\x1b[0m', text);
};

logYellow = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[33m%s\x1b[0m', text);
};

logBlue = (text, brighter) => {
  console.log((brighter ? '\x1b[1m' : '') + '\x1b[34m%s\x1b[0m', text);
};

module.exports = {
  cap,
  dottedLineLength: 55,
  logRed,
  logGreen,
  logOrange,
  logCyan,
  logMagenta,
  logYellow,
  logBlue
};
