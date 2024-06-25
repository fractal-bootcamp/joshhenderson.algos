import React, { useEffect } from 'react'
import { useState } from 'react'


type SortVisualizerProps = {
  historyArray: number[][]
}

export default function SortVisualizer(props: SortVisualizerProps) {
  //store the index in the history aray as a state variable
  const [historyArrayIndex, setHistoryArrayIndex] = useState(0)
  //runs on mount and executes +1 on the history array index. 
  useEffect(() => {
    if (historyArrayIndex === props.historyArray.length - 1) {
      return // if the history array index === the length of the history array, return
    }
    setTimeout(() => setHistoryArrayIndex(historyArrayIndex + 1), 1000)
    //after one second, execute callback function increment history array index +1

  }, [historyArrayIndex]) //dependency that triggers the useEffect each time recursively 

  return (

    <div>
      {props.historyArray[historyArrayIndex]}
    </div>

  )
}
