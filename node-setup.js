const exec = require('child_process').exec;
const utils = require('./utils');

manageErrors = (errors) => {
  return new Promise((resolve, reject) => {
    errors.forEach((err) => {
      if(err) {
        reject(err);
      }
    });

    resolve(utils.OK_CODE);
  });
};

installHBS = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing hbs...');

    exec(`npm i hbs --save`, async(err, stdout, stderr) => {
      let error1, ok;
      [error1, ok] = await to(manageErrors([err]));
      
      if(!ok) { 
        reject(error1);
      } else {
        resolve(utils.OK_CODE);
      }
    });
  });
};

installMongoose = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing mongoose...');

    exec(`npm i mongoose --save`, async(err, stdout, stderr) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installHBS());
      
      if(!ok) { 
        reject([error1, error2]);
      } else {
        resolve(utils.OK_CODE);
      }
    });
  });
};

installBodyParser = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing body-parser...');

    exec(`npm i body-parser --save`, async(err, stdout, stderr) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installMongoose());
      
      if(!ok) { 
        reject([error1, error2]);
      } else {
        resolve(utils.OK_CODE);
      }
    });
  });
};

installExpress = () => {
  return new Promise((resolve, reject) => {
    console.log('    > Installing express...');

    exec(`npm i express --save`, async(err, stdout, stderr) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installBodyParser());
      
      if(!ok) { 
        reject([error1, error2]);
      } else {
        resolve(utils.OK_CODE);
      }
    });
  });
};

init = (folderName) => {
  return new Promise((resolve, reject) => {
    console.log(`--> Intalling node dependencies in ${folderName}/`);

    exec(`npm init -y`, async(err, stdout, stderr) => {
      let error1, error2, ok;
      [error1, ok] = await to(manageErrors([err]));
      [error2, ok] = await to(installExpress());
      
      if(!ok) { 
        reject([error1, error2]);
      } else {
        resolve(utils.OK_CODE);
      }
    });
  });
};

module.exports = {
  init
};
