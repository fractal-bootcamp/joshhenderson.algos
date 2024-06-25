
type ComponentProps = { key: number[] }

// YOU CANNOT PASS NON-OBJECTS TO COMPONENTNS
export default function ComponentDrillTwo({ key }: ComponentProps) {
    // const {key} = props;

    return key.map((element) => <div>{element}</div>)
}