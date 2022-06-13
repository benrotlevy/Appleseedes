import fs from "fs";
import myFunc from "./esmodule.mjs";
console.log(myFunc());
//we enabled ESM (ES modules) in our package.json file
// console.log(fs);
import { func1, func2, func3 } from "./functions.js";
console.log(func1(), func2(), func3());

/*
cannot use the following:
__filename
__dirname
*/
