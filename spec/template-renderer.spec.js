const templateRenderer = require('../template-renderer')

describe('checks the only function in template-renderer.js', () => {
  it('should have a function called renderTemplate', () => {
    expect(templateRenderer.renderTemplate).toBeTruthy()
  })
})