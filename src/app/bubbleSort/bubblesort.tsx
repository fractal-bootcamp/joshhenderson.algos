import shouldSwap from "./shouldSort"


export default function BubbleSort(arr: number[]): {
    sortArray: number[],
    sortHistory: number[][]
} {


    const arrayCopy: number[] = [...arr]// store incoming array prop in variable
    let arraySortingHistory: number[][] = [] // array of intermediate arrays
    let thereWasASwap = false //hold whether there was a swap in a variable 
    for (let i = 0; i < arr.length - 1; i++) {
        //for each element in the array starting in the first position go through it
        // until you get to the last two
        if (arrayCopy[i] > arrayCopy[i + 1])
        //if the 1st element is greater than the second element then...
        {
            //swap the two elements
            [arrayCopy[i], arrayCopy[i + 1]] = [arrayCopy[i + 1], arrayCopy[i]]
            //console.log("swapped", arrayCopy[i + 1], arrayCopy[i])
            thereWasASwap = true //declare that there was a swap 
        }

        if (thereWasASwap) { //if there was a swap 
            arraySortingHistory.push(arrayCopy); //add the current array to the arraySortingHistory

            const sortWithHistory = BubbleSort(arrayCopy); // call the function again because
            // we are unsure if the array is sorted 

            return {

                sortArray: sortWithHistory.sortArray,
                sortHistory: arraySortingHistory.concat(sortWithHistory.sortHistory)

            }
        }
    }
    console.log(arraySortingHistory)
    return { sortArray: arrayCopy, sortHistory: arraySortingHistory };
}
