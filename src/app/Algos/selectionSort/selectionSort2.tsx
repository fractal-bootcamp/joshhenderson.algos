import React from 'react'

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

//console.log("here")
export default function selectionSort2(array: number[]) {


    const arrayCopy = array

    for (let i = 0; i < arrayCopy.length - 1; i++) {
        let minIndex = i // set the minIndex cutoff where the algo inserts/swaps the next smallest value in the array
        console.log(minIndex) // show us the index we are currently dealing with 
        for (let j = i + 1; j < arrayCopy.length; j++) {
            if (arrayCopy[j] < arrayCopy[minIndex]) {
                [arrayCopy[minIndex], arrayCopy[j]] = [arrayCopy[j], arrayCopy[minIndex]]
            }
            console.log(arrayCopy);
            return (arrayCopy)
        }
    }
}

selectionSort2(initialArray)

//[newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]

// function swap (array: number[], smallIndex: number, minIndex: number){
//     let temp =
// }

// const smallestNumber = Math.min(...arrayCopy) // show me the smallest number in the away
// // this will always be the same. must create a new index or only check from the min index to the end of the array

// const smallestNumIndex = arrayCopy.findIndex((e) => e === smallestNumber);