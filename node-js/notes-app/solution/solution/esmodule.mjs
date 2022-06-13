//ES Module (ECMAScript Module)
// imports modules asnchronuosly upon loading
//ESM waits to execute any code in a module until all of it's imports have been loaded and parsed, then does the binding/side-effects stuff in the relative order that they happen.
//The loading and parsing for ESM modules is indeed asynchronous, but the execution of the code in them is synchronous and serialized based on the order they are imported
const myFunc = () => {
  console.log("from esmodule.mjs");
  //dirname not found
  // return console.log(__dirname);
};

export default myFunc;
