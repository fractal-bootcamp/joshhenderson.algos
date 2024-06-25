import React from 'react'

export default function Rep7(props: { array: number[] }) {
    return (
        props.array.map((e) => <div>{e}</div>)
    )
}
