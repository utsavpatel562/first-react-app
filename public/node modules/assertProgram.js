console.clear();
const assert = require('assert');
let x = 5;
let y = 4;
try{
    // checking condition
    assert(x==y)
}
catch{
    // Error Output
    console.log('${x} is not equal to ${y}');
}