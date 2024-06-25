import React from 'react'

export default function TotalRecall(props: { anotherArray: number[] }) {
    return props.anotherArray.map((e) => <div>TotalRecall{e}</div>)
}
