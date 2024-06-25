import React from 'react'
type ComponentDrillProps = {
    firstProp: number
    secondProp: { key1: number[], key2: number[][] }
    thirdProp: { key3: { embeddedKey: string, embeddedKey2: number } }
}

export default function ComponentDrill3(props: ComponentDrillProps) {

    props.firstProp



    return (
        <div>ComponentDrill3</div>
    )
}
