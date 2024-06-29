
import React from 'react'
type componentDrillProps = {
    array: number[]
}

export default function ComponentDrill(props: componentDrillProps) {

    return (
        <div>
            {props.array.map((element) => { return <div>{element}</div> })}
        </div>
    )

}




// write a component that takes an array as props and renders all the elements of that array as divs using map

// do this 10 times and then come to andrew.