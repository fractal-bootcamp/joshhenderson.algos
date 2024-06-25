
type Drill4Props = {
    array: number[]
}

export default function Drill4(props: Drill4Props) {
    return props.array.map((element) => <div>{element}</div>)

}