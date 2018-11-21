const utils = require('./utils')

let validateNames = structure => {

  let invalidNames = []

  Object.keys(structure.entities).forEach(keyEntity => {
    if (utils.invalidName(keyEntity)) {
      invalidNames.push(keyEntity)
    }
    
    let entity = structure.entities[keyEntity]
    
    Object.keys(entity).filter(keyAttribute => {
      if (utils.invalidName(keyAttribute)) {
        invalidNames.push(`${keyEntity}.${keyAttribute}`)
      }
    })
  })

  let errorMsg = invalidNames.length ? invalidNames.join(', ') : null

  if (errorMsg) {
    errorMsg = `--> Invalid names: ${errorMsg}`
    return errorMsg
  }
}

let validateEmptyEntity = structure => {
  let emptyEntities = []
  Object.keys(structure.entities).forEach(keyEntity => {
    let entity = structure.entities[keyEntity]
    
    if (!Object.keys(entity).length) {
      emptyEntities.push(keyEntity)
    }
  })
  
  let errorMsg =  emptyEntities.length ? emptyEntities.join(', ') : null

  if (errorMsg) {
    errorMsg = `--> Empty entities: ${errorMsg}`
    return errorMsg
  }
}

let getErrors = structure => {
  let errors = []
  let namingErrors = validateNames(structure)
  let emptyEntityErrors = validateEmptyEntity(structure)

  if(namingErrors) {
    errors.push(namingErrors)
  }

  if(emptyEntityErrors) {
    errors.push(emptyEntityErrors)
  }

  return errors.length ? errors.join('\n') : null
}

module.exports =  {
  getErrors
}
