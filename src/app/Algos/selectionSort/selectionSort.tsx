import React from 'react'

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

console.log("here")
export default function selectionSort(array: number[]) {
    const arrayCopy = array

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i // set the minIndex cutoff where the algo inserts/swaps the next smallest value in the array
        console.log("1st here")
        for (let j = i + 1; i < array.length; i++) { //second for loop that 
            console.log("2nd here")
            const smallestNumber = Math.min(...arrayCopy)
            console.log(smallestNumber)
            const smallestNumIndex = arrayCopy.findIndex((e) => e === smallestNumber)
            return (console.log(arrayCopy, smallestNumIndex))

        }
    }


}

selectionSort(initialArray)


//[newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]