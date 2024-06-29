import React, { useEffect } from 'react'
import { useState } from 'react'



type SortVisualizerProps = {
  sortHistory: number[][],
}

export default function SortVisualizer(props: SortVisualizerProps) {
  //store the index in the history aray as a state variable
  const [sortHistoryIndex, setSortHistoryIndex] = useState(0)
  //runs on mount and executes +1 on the history array index. 
  useEffect(() => {
    console.log(sortHistoryIndex)
    if (sortHistoryIndex === props.sortHistory.length - 1) {
      return // if the history array index === the length of the history array, return
    }
    else setTimeout(() => setSortHistoryIndex(sortHistoryIndex + 1), 1000)
    //after one second, execute callback function increment history array index +1
  }, [sortHistoryIndex]) //dependency that triggers the useEffect each time recursively 

  return props.sortHistory[sortHistoryIndex]// returns a single array from the array of arrays which get passed in 
}
