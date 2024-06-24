
export default function bubblesort(arr: number[]) {
    const sortedArray = [...arr]
    let intArrays: number[][] = [] // array of intermediate arrays
    //define a function to determine if the second element of the array is greater than the first
    function shouldSwap(firstElement: number, secondElement: number) {
        console.log("swapping")

        if (secondElement < firstElement) {
            return true
        }
    }

    // assume that it's sorted
    let sorted = true

    //loop through each element of the array
    do {
        sorted = true
        for (let i = 0; i < sortedArray.length - 1; i++) {

            //if should swap function says you gotta swap then swap. and keep swapped as true
            if (shouldSwap(sortedArray[i], sortedArray[i + 1])) {
                console.log("WTF")
                const temp = sortedArray[i]
                sortedArray[i] = sortedArray[i + 1]
                sortedArray[i + 1] = temp
                sorted = false
                intArrays = [...intArrays, [...sortedArray]]
                //if should swap says you dont gotta swapp then swapped = false
            }
            console.log("arrays", intArrays)
            //if swapped is still true run it again 

            console.log(sortedArray)
        }
    } while (!sorted)

    // don't call yourself if you're sorted
    // every time we call this we should have a slightly more sorted array
    // if (unsorted) { return bubblesort(arr); console.log("running bubblesort again") }

    // if we're sorted, return the array
    return { sortedArr: sortedArray, intArrays };
}