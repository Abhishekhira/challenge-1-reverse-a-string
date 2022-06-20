console.log("file is connected")
//in javascript we dont have anu built in method to reverse the string so what we can do here first we can create a function after that we can use split method of string which split the string intro substring and store them in array with the help of that we can successfully reverse a string because in arrays we have a method to reverse a array
function reverse(str) {


    // let firstStep=str.split('')
    // let secondStep=firstStep.reverse()
    // let thirdStep=secondStep.join("")


    // the same functionality we gonna do this with one line of code because in javascript we can do methods chaining so we can do instead
    // return  str.split('').reverse().join('')
    //

    // we also have a anothr method for doing this same thing using for loop 
    let final='';
    for (let i =str.length-1; i>=0;i--) {
       final+= str[i]
        
    }
    return final;

  

}
console.log(reverse('reverseme'))

