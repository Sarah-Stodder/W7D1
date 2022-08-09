// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    for(let i = 0; i < dog_names.length; i++)
    {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[i]}`)
        }
        else {
            console.log("No Matches")
        }
    }
}

console.log(findWords(dog_names, dog_string))

// //Call method here with parameters

// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    }
    return arr
}

console.log(replaceEvens(arr))
// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function. The first line of the code has been defined as below.

function helloUser(username){
    return `hello ${username} this is javaScript!`
}

console.log(helloUser('SarahS'))

// Question 2
// Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing

function firstOdd(){
    for (let i = 1; i < 100; i+=2) {
        console.log(i);
       }

}
console.log(firstOdd())       
// Question 3
// Please write a Python function, max_num_in_list to return the max number of a given list. The first line of the code has been defined as below.

console.log(Math.max(2,4,5,19,2,4,33,22,0))
                
// Question 4
// Write a function to return if the given year is a leap year. A leap year is divisible by 4, but not divisible by 100, unless it is also divisible by 400. The return should be boolean Type (true/false).

//     
function isLeapYear(year){
    return year % 100 != 0 || year % 400 == 0 && year % 4 == 0 ? true:false;
}

console.log(isLeapYear(2024))


                
// Question 5
// Write a function to check to see if all numbers in list are consecutive numbers. For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5] are not consecutive numbers. The return should be boolean Type.

//     def is_consecutive(a_list):
//         .....
function isConsecutive(aList){
    let nums = []
    for (let i=0; i < aList.length; i++)
        if (i == 0){
            nums.push(aList[i])
        }else if (aList[i] - nums.pop() != 1){
            return false;
        }else{
            nums.push(aList[i])
        }
    return true;
}

my_list = [1,2,3,4,5,6,7,8]
console.log(isConsecutive(my_list))