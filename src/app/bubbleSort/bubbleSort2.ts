

// returns a sorted array of numbers
function bubblesort(array: number[]): number[] {
    const newArray = structuredClone(array)
    // 1. 
    let swapped = false;
    for (let i = 0; i < array.length; i++) {
        if (newArray[i] > newArray[i + 1]) {
            [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
            swapped = true
        }
    }

    // 2. 
    if (swapped) return bubblesort(newArray)
    return newArray
}