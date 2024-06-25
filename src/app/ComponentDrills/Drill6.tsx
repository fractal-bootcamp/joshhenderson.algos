import React from 'react'


export default function Drill6(props: { array: number[] }) {
    return (
        props.array.map((e) => { return <div>{e}</div> })
    )
};
