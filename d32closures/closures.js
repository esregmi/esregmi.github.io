"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 */
function inArray(arr) {
    
    return function(num){
        for(const element of arr){
            if(element===num){
                return true;
            }
        }
        return false;
    };
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {

    return function(mid){
        if(mid >low && mid < high){
            return true;
        }else{
            return false;
        }
    };

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){

    fieldName.toLowerCase();

    if(fieldName=== "name"){
        return function(obj1,obj2){
           return obj1.name.localeCompare(obj2.name);
        };
    }else if(fieldName === "age"){
        return function(obj1,obj2){
                return obj1.age - obj2.age;
        };
    }else if(fieldName === "surname"){
        return function(obj1,obj2){
             return obj1.surname.localeCompare(obj2.surname);
        };
    }

}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
let shooters =[];

for(let idx = 0; idx < 6; idx++){
    let shooter = function() { 
        console.log("I am shooter ", idx); 
        return idx;
};
shooters.push(shooter);
}
return shooters;

}
