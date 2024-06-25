import React from 'react'

export default function RecallRep8(props: { someArray: number[] }) {
    return props.someArray.map((e) => <div>RecallRep8{e}</div>)

}
