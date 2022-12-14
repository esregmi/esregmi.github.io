"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */
/*return values instead of displaying alerts, and to take the passwords as 
parameters rather than prompting for them
*/
function askPassword(ok, fail, password) {
    if (password === "rockstar") {
        return ok();
    } else {
        return fail();
    }

}

let user = {
    name: 'John',

    loginOk(x) {
        return `${this.name} logged in`;
    },

    loginFail() {
        return `${this.name} failed to log in`;
    },
};
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


function askPassword2(ok, fail, password) {

    if (password === "rockstar") {
        return ok();
    } else {
        return fail();
    }
}

let user2 = {
    name: 'John',

    login(result) {
        return (this.name + (result ? " logged in" : " failed to log in"));
    }
};

/*
// Fixing using arrow function [tested]
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach((student)=> {
    console.log(this.title + ': ' + student)
    });
    }
    };
    group.showList();
  
    // Fixing using Bind[tested]
    let group = {
      title: "Our Group",
      students: ["John", "Pete", "Alice"],
      showList() {
      this.students.forEach(function(student) {
      console.log(this.title + ': ' + student)
      }.bind(this));
      }
      };
      group.showList();
  */


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests