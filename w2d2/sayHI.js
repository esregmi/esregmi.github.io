//"use strict";
/* eslint-disable */

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     //IMPLEMENT THIS
     const output = "hello, my name is"+ this.name + "age is " + this.age;
     console.log(output);
  }
  
  // add sayHi function to both objects
  // manager.sayHi = sayHowdy;
  // intern.sayHi = sayHowdy;

  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'