renderTemplate = (template, replacements) => {
  let rendered = template;

  for(let item of replacements) {
    rendered = rendered.replace(item.pattern, item.value);
  }
  return rendered;
}

module.exports = {
  renderTemplate
};
