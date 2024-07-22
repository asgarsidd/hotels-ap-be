//core Module ---> File System
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
var _ = require('lodash');


var data = ["person", "person", "person", 1,2,3,3,4,2, 'name', 'age'];
var filter = _.uniq(data);
console.log(_.isString(5));

console.log("theis data is Unique",filter);

console.log('coreModule file is running which one is current' );
console.log('notes page age -->',notes.age)
var age = notes.age;
var result = notes.addNumber(age,18);
console.log('result-->',result);
const user = os.userInfo();
console.log(user);
/* {
    uid: -1,
    gid: -1,
    username: 'Asgar',
    homedir: 'C:\\Users\\Asgar',
    shell: null
  }
    */
//    fs.appendFile('greeting.txt', 'Hello '+ user.username +"\n", () => {
     
//      console.log('the file is created!!');
//    });


   // callback and their functions
   

// function add(a, b) {
//   return a + b;
// }
// var result = add(5, 4);
//IIFE function which directly call itself.
// (function () {
//     console.log('multiply-->');
// }());
// console.log('result-->',result);
// console.log("server file is running");
// console.log("asgar left the chat");

// console.log("Callback -->");
// function callback(){
//     console.log("some other just called me!");
// }
// const multiply = function(a, b, nothing) {
//      const result = a *b;
//      console.log("result -->",result);
//      nothing();
// }

// calling method:
// multiply(5,4, callback);
// multiply(5,4, ()=> console.log("this is shorter"))
// multiply(5,4, function(){ console.log("this is shorter but using function")})

// callback is done.
// it just wait for another function completion.

// JSON ----------

// const jsonString = '{"name": "Asgar", "age": 24, "city": "India"}';
// const jsonObject = JSON.parse(jsonString); //convert JSON to Object
// console.log("Json Object -->", jsonObject);
// console.log(typeof jsonObject, "Parse");
// const objectToConvert = { name: "Asgar", age: 24, city: "India" };
// const jsonString2 = JSON.stringify(objectToConvert); //convert Object to JSON
// console.log("Json String -->", jsonString2);
// console.log(typeof jsonString2, "Stringifi");
