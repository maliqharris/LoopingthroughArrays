/*Writting a loop that will traverse through an array of numbers

and print each number*/
function printArray (arr){
    for(var x = 0; x < arr.length; x++){
        console.log(arr[x])
    }
    
}
printArray ([8, 6, 7, 5, 3, 0, 9])

/*  Write a for loop that will traverse through an array of  numbers, 
and print each number. */
function sumOfArray (arr){
    var sum = 0
    for(var x = 0; x< arr.length; x++) {
       sum = sum + arr[x]
    }
    console.log(sum)
}
sumOfArray ([4, 7, 13, 13, 19, 37, -2])

/* Write a for loop that will traverse through an array of numbers, 
and print ONLY the numbers greater that 5*/
function greaterThan5 (arr) {
    for(x = 0; x < arr.length; x++){
        if(5 < arr[x]){
            console.log(arr[x]);
        }
        else{
            if(5 > arr[x]){
            console.log("No Dice");
        }
    }
}
}
greaterThan5 ([6, 2, 12, 14, -24, 5, 0])