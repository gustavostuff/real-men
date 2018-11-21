const templateRenderer = require('../src/template-renderer')

describe('checks the only function in template-renderer.js', () => {
  it('should have a function called renderTemplate', () => {
    expect(templateRenderer.renderTemplate).toBeTruthy()
  })

  it('should return a rendered template', () => {
    expect(templateRenderer.renderTemplate('obj: { __target1__, __target2__ }', [{
      pattern: /__target1__/g,
      value: 'data: 3'
    }, {
      pattern: /__target2__/g,
      value: 'info: 4'
    }])).toBe('obj: { data: 3, info: 4 }')
  })
})