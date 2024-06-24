"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Bubblesort from "./bubblesort";


function bubblesort(arr: number[]) {
  const arrayCopy = [...arr]
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
    sorted = true // set sorted variablie to true, we are assuming the array is sorted as a fail safe 
    for (let i = 0; i < arrayCopy.length - 1; i++) {


      if (shouldSwap(arrayCopy[i], arrayCopy[i + 1])) { //if second element is greater than the first, swap them
        console.log("WTF")
        const temp = arrayCopy[i]
        arrayCopy[i] = arrayCopy[i + 1]
        arrayCopy[i + 1] = temp
        sorted = false // a swap occured so we are unsure if the array is sorted 
        intArrays = [...intArrays, [...arrayCopy]]


      }
      console.log("arrays", intArrays)
      //if swapped is still true run it again 

      console.log(arrayCopy)
    }
  } while (!sorted)

  // don't call yourself if you're sorted
  // every time we call this we should have a slightly more sorted array
  // if (unsorted) { return bubblesort(arr); console.log("running bubblesort again") }

  // if we're sorted, return the array
  return { sortedArr: arrayCopy, intArrays };
}

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

export default function Home() {
  //holding the array in state for the useEffect later 
  const [array, setArray] = useState<number[]>([])
  const [intermediateArrays, setIntermediateArrays] = useState<number[][]>([])
  // intitialize array


  useEffect(() => {
    const { sortedArr, intArrays } = bubblesort(initialArray)
    intArrays.forEach((value, index, array) => {
      setTimeout(() => { setIntermediateArrays(intArrays.slice(0, index)) }, 200 * index)
    })
    setArray(sortedArr)
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        {array.join("  ")}
        {intermediateArrays.join(" ")}
        {/* {bubblesort(initialArray)} */}
      </motion.div>
    </main>
  );
}
