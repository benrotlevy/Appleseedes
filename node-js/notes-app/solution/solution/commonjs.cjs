//CommonJS node uses the CJS module format

//CJS imports module synchronously upon loading.
//CJS executes imports as it finds them, blocking until they finish.

const myFunc4 = () => {
  return console.log(__dirname);
};

module.exports = myFunc4;
