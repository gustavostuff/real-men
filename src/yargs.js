let init = () => {
  let argv = require('yargs')
    .command('--entities', 'Specifies a list of entities separated by commas (no spaces!) or a json config file\nalias: -e', {
      entities: {
        alias: '-e'
      }
    })
    .command('--database', 'The name of the database to create (if not exists)\nalias: -d', {
      database: {
        alias: '-d'
      }
    })
    .command('--port', 'Port to run the node server\nalias: -p', {
      database: {
        alias: '-p'
      }
    })
    .command('--open', 'To open the brower automatically\nalias: -o', {
      database: {
        alias: '-o'
      }
    })
    .command('--no-run', 'To not run the server (and to not create the DB) when the build is finished\nalias: -n', {
      database: {
        alias: '-n'
      }
    })
    .locale('en')
    .help().argv

  return argv
}

module.exports = {
  init
}
