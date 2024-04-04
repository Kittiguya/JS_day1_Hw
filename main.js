console.log("HEYO WHATS UP DUDES")


// BRANDT WHY IS JAVASCRIPT SO HARD. Im confusing javascript and Python soo much now. >.< Luckily trial and error help me out a lot. 
// LUCKILY im learning how to read Javascript after doing the first 2 excersises. Yes eggs are sides. This is still hard though.



//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){                       // defining the function findWords(string, names) with string and names as inputs
    let matched = false;                               // this is assigning matched to false to start
    for (let i = 0; i < names.length; i++) {            // for loop(assigning i to 0; i < names.length, to check the list of names; i++ incrementing value by 1)
        let name = names[i].toLowerCase();               // assigning names to name while indexing to the i and converting to lowecase
        if (string.toLowerCase().includes(name)) {           //this is running the string while converting to lowercase, but also including the name
            console.log(`Matched ${names[i]}`);              // this is printing if the matched name from names matches any name from string
            matched = true;                                  // this is firing it to change matched to true if other conditions are met
        }
    }
    if (!matched){                                            //if (!matched) is saying if name isnt matching any of the strings print out NO MATCHES
        console.log("No Matches");
    }
    

}

findWords(dog_string, dog_names);                            






//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr, even_index){   // This was what i came up with until i re-read the instructions and remembered i needed to use .splice() It accomplishes the same thing
    for (let i = 0; i < arr.length; i++){ // line 50 is assining i to 0, then its running i the length of the array, and i is being incremented up by 1
        if (i % 2 === 0) { // im using i % 2 to check if its equal to 0 i think, modulo confuses me a bit in python on its true definition. So i just roll with the scuffed version
            arr[i] = even_index !== undefined ? even_index : 'even index'; // line 52 im telling im checking i in arr, it = even_index !== assigning to undefined if its an even_index: 
        }                                                                  //  'even index' names undefined as it should
    }
    return arr;                                                              
}                                            
                        
console.log(replaceEvens(arr))        
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr1, replacement){
    for (let i = arr1.length - 1; i >= 0; i--){  // i-- is going through the list backwards starting at last index as stated by arr1.length 
        if (i % 2 === 0) {                              // same thing as line 51
            arr1.splice(i, 1, replacement !== undefined ? replacement : 'even index');  // im splicing like required and the replacement words are: even index
        }
    }
    return arr1;
}

let modArr1 = replaceEvens(arr1, "even index")       // i made a temp modified array list defined as modArr1 and its sending the actual command to the code
                                                      // to replace the words from undefined to even index. 

console.log(arr1)



//USE 2 CODEWARS PROBLEM COMPLETED WITH PYTHON BUT COMPLETE THEM WITH JAVASCRIPT 





// PROBLEM 1 
//This code does not execute properly. Try to figure out why.

/* I MIGHTVE CHEATED. THIS WAS THE VERY FIRST CODE WARS PROBLEM I DID AND IT WAS DONE IN JAVASCRIPT PLEASE FORGIVE ME BUT IM TRYING TO CUT A SMALL CORNER TO CATCH UP

function multiply(a, b){          
    a * b
}
*/ // solution is to add return a * b the line below a * b

function multiply(a,b){
    a * b;
    return a * b
}
console.log(multiply(5,5))



/* THIS WAS MY 2nd EVER CODE WARS COMPLETED but this one was done using Python originally! Heres for it in Javascript.
PROBLEM 2:
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

*/

function multiply(number){ 
    return number * 5 ** (Math.abs(number).toString().length);
  
  }
console.log(multiply(3))  
console.log(multiply(10))
console.log(multiply(200))
console.log(multiply(0))
console.log(multiply(-3))