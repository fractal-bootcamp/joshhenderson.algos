
const foo = (object: fooProps) => {
    const { banana } = object
    const { apple } = object


    const c = banana - apple;
    return c
}

const potato = 3
const vegetable = 4


type fooProps = {
    banana: number,
    apple?: number
}


console.log(foo({ banana: 3, apple: 4 }))

export default foo;