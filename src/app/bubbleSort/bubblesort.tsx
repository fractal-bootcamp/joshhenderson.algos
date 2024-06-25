import shouldSwap from "./shouldSort"

export default function bubblesort(arr: number[]) {


    const sortedArray = arr// store incoming array prop in variable
    let intArrays: number[][] = [] // array of intermediate arrays


    let sorted = true // assume that incoming array is sorted.... boolean we can change later

    //loop through each element of the array
    do {
        // sorted = true // set sorted variablie to true, we are assuming the array is sorted as a fail safe 
        for (let i = 0; i < sortedArray.length - 1; i++) {

            if (shouldSwap(sortedArray[i], sortedArray[i + 1])) { //if second element is greater than the first, swap them
                console.log("we are swapping")
                const temp = sortedArray[i] // assign a variable to the first element 
                sortedArray[i] = sortedArray[i + 1] //assign the first element to the second element
                sortedArray[i + 1] = temp // assign the second element to the temp variable which was the first element
                sorted = false // a swap occured so we are unsure if the array is sorted, thus sorted is false
                intArrays = [...intArrays, [...sortedArray]] // add current array to the intermediate array list to track each iteration
            }
            console.log("arrays so far", intArrays)

            console.log(sortedArray)
        }
    } while (!sorted)
    // don't call yourself if you're sorted aka sorted === true
    // every time we call this we should have a slightly more sorted array

    // if (unsorted) { return bubblesort(arr); console.log("running bubblesort again") }
    // if we're sorted, return the array
    return { sortedArr: sortedArray, sortHistory: intArrays };
}
