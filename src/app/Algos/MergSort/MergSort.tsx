const initialArray = [2, 5, 8, 0, 3, 7, 1, 9, 4, 6]
//combine two sorted arrays into a single sorted array
// (in this case they will mostly be single index arrays)
type mergeProps = {
    arrOne: number[],
    arrTwo: number[],
    finalArray?: number[]
}
const testArray1 = [1, 3, 5, 7, 9, 11, 23, 45]
const testArray2 = [1, 3, 4, 5, 6, 7, 7, 8, 11, 13, 14, 16]
function merge(arrOne: number[], arrTwo: number[]): number[] {
    //    if (arrOne.length === 0 || arrTwo.length === 0) { return console.log("nope") }
    let array1: number[] = [...arrOne]; //Use spread operator to make a copy of arrOne function argument
    let array2: number[] = [...arrTwo]; // Use spread operator to make a copy of the arrTwo function argument 
    let mergedArray: number[] = [] //initialize an empty array 
    while (array1.length && array2.length) { // for each element, while index is less than the length of either array
        if (array1[0] < array2[0]) { // if the first index of array1 is less than array2 
            mergedArray.push(array1.shift()) // then pop it off the array and push it on to the mergedArray
        }
        else { // otherwise,
            mergedArray.push(array2.shift()) //pop the first index off array2 and push it to the end of mergedArray
        }


    }
    console.log(mergedArray, "here")
    return [...mergedArray, ...array1, ...array2] //finally return mergedArray 

};

//merge(testArray1, testArray2); //merge function test


//The merge sort function. forks the array into two arrays and continues to do so until there are only single digits which cant be split 
//it then merges two single digit arrays into a single ordered array and returns that ordered array back to the parent node. 
//the parent node then executes the other side of the fork and receives a return value. 
//once both function calls have been satisfied, it merges them and returns the sorted array to its parent node or the main execution pathway 




function mergeSort(arr: number[]): number[] {// takes an unsorted array parameter/argument

    let arrayCopy = [...arr]; //copy the incoming array argument
    let left: number[] = []; //initialize an empty child array
    let right: number[] = []; //initialize another empty child array

    if (arrayCopy.length === 1) {
        return arrayCopy
    }
    else {
        left = mergeSort(arrayCopy.slice(0, Math.floor(arrayCopy.length / 2)))
        right = mergeSort(arrayCopy.slice(Math.floor(arrayCopy.length / 2)))
        const finalArray: number[] = merge(left, right)
        return finalArray
    }

};




//console.log("merge result", merge([1, 2, 4], [3, 5, 6]))
console.log("mergesort result", mergeSort(initialArray))
