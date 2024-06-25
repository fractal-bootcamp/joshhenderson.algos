import shouldSwap from "./shouldSort"

export default function bubblesort(arr: number[]) {


    const arrayCopy: number[] = arr// store incoming array prop in variable
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
            thereWasASwap = true //declare that there was a swap 
        }
        // if there was a swap then add this version of the array copy to the array sorting history
        // and run the function again but this time on the copy not the OG array
        if (thereWasASwap) { arraySortingHistory.push(arrayCopy); bubblesort(arrayCopy) }

    }

    return { sortedArr: arrayCopy, sortHistory: arraySortingHistory };
}
