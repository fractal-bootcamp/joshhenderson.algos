"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bubblesort from "./bubbleSort/bubblesort";
import SortVisualizer from "./bubbleSort/SortVisualizer";

const initialArray = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SortVisualizer history={bubblesort(initialArray).sortHistory} />
    </main>
  );
}
