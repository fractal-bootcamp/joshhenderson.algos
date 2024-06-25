import React, { useEffect } from 'react'
import { useState } from 'react'
import bubblesort from './bubblesort'

type SortVisualizerProps = {
  history: number[][]
}

export default function SortVisualizer(props: SortVisualizerProps) {

  const [historyIndex, setHistoryIndex] = useState(0)

  useEffect(() => {
    if (historyIndex === props.history.length - 1) {
      return
    }
    setTimeout(() => setHistoryIndex(historyIndex + 1), 1000)
  }, [historyIndex])

  return (

    <div>
      {props.history[historyIndex]}
    </div>

  )
}
