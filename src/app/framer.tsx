import { motion } from "framer-motion"
import React from 'react'

export default function Framer(array: number[][]) {

    array.map((element) => <motion.div>{element.map}</motion.div>)

    return (
        <div>framer</div>
    )
}
