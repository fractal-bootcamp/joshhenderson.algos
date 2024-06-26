import React from 'react'

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]


export default function selectionSort(array: number[]) {
    const arrayCopy = array
    let sortedArray = []
    array.forEach((element) => {
        if (arrayCopy.length != 0 && element + 1 < element) {
            console.log(arrayCopy)
            sortedArray = arrayCopy.splice(element, 1, element)

            console.log(sortedArray)
        }
    })
    return selectionSort(initialArray)
}

selectionSort(initialArray)
