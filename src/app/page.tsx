"use client"
import BarVisualizer from "./bubbleSort/BarVisualizer";
import SortVisualizer from "./bubbleSort/SortVisualizer";
import BubbleSort from "./bubbleSort/bubbleSort";



const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

export default function Home() {
  const bubbleSort = BubbleSort(initialArray)
  const timedArray = SortVisualizer({ sortHistory: bubbleSort.sortHistory })

  console.log("run once")
  return (
    <div>
      <BarVisualizer array={timedArray} />
    </div>
  );
}
