"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


function bubblesort(arr: number[]) {
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

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

export default function Home() {
  //holding the array in state for the useEffect later 
  const [array, setArray] = useState<number[]>([])
  const [intermediateArrays, setIntermediateArrays] = useState<number[][]>([])
  // intitialize array


  useEffect(() => {
    const { sortedArr, intArrays } = bubblesort(initialArray)
    setArray(sortedArr)
    setIntermediateArrays(intArrays)
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {array.join("  ")}
        {intermediateArrays.join(" ")}
        {/* {bubblesort(initialArray)} */}
      </div>
    </main>
  );
}
