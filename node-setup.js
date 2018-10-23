const exec = require('child_process').exec;

manageErrors = (errors) => {
  return new Promise((resolve, reject) => {
    errors.forEach((err) => {
      if(err) {
        reject(err);
      }
    });

    resolve();
  });
};

installHBS = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing hbs...');

    exec(`npm i hbs --save`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        resolve();
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

installNodemon = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing nodemon...');

    exec(`npm i nodemon --save-dev`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        installHBS().then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

installMongoose = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing mongoose...');

    exec(`npm i mongoose --save`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        installNodemon().then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

installBodyParser = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing body-parser...');

    exec(`npm i body-parser --save`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        installMongoose().then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

installExpress = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing express...');

    exec(`npm i express --save`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        installBodyParser().then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

init = (folderName) => {
  return new Promise((resolve, reject) => {
    console.log(`--> Intalling node dependencies in ${folderName}/`);

    exec(`npm init -y`, (err, stdout, stderr) => {
      manageErrors([err]).then(() => {
        installExpress().then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        console.error(error);
      });
    });
  });
};

module.exports = {
  init
};
