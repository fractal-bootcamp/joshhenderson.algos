const Array4 = [95, 65, 45, 23, 57, 89, 12, 45, 67, 34, 78, 56, 90]

export default function InsertionSort(array: number[]) {
    const arrayCopy = [...array]
    for (let i = 1; i < arrayCopy.length; i++) {
        console.log(i)
        for (let j = 0; j < i; j++) {
            if (arrayCopy[i] < arrayCopy[j]) {
                [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
            }
            console.log(arrayCopy)
        }
    }
}

InsertionSort(Array4);