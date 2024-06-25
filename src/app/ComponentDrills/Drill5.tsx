import React from 'react'

export default function Drill5(props: { array: number[] }) {

    return (
        props.array.map((element) => { return (<div>{element}</div>) })
    )
};


