import React from "react"
export default function FinalRecall(p: { a: number[] }) {
    return p.a.map((e) => <div>{e}</div>)
};