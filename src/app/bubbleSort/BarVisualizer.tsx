import React from 'react'
import SortVisualizer from './SortVisualizer'
import { motion, animate } from 'framer-motion'



export default function BarVisualizer(props: { array: number[] }) {
    //map the incoming arrays and return divs for each element 
    const bargraph = props.array.map((element) => {
        return (
            <>
                <div className='flex flex-row'>
                    <label className='flex flex-row'>{element}
                        <motion.div initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: element * 10 }} // Adjust the multiplier to scale bar height
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }} style={{
                                height: 20,
                                margin: 5,
                                backgroundColor: 'blue',
                            }}>

                        </motion.div>
                    </label>
                </div >
            </>
        )
    })

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} className='bg bg-black height='>
                {bargraph}
            </motion.div>
        </>
    )
}
