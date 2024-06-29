let testArray = [1, 5, 6, 9, 4, 6, 5, 7, 9, 0, 2, 3]

function merge(arr1: number[], arr2: number[]) {
    let copy1 = [...arr1]
    let copy2 = [...arr2]
    let mergedArray = []

    while (copy1.length && copy2.length) {
        if (copy1[0] < copy2[0]) {
            mergedArray.push(copy1.shift())
        }
        else mergedArray.push(copy2.shift())
    }
    return [...mergedArray, ...copy1, ...copy2]
};

function mergeSort(arr: number[]) {
    let left: number[] = []
    let right: number[] = []

    if (arr.length === 1) {
        return arr
    }
    else {
        const left: number[] = arr.slice(0, Math.floor(arr.length / 2));
        const right: number[] = arr.slice(Math.floor(arr.length / 2));
        mergeSort(left)
        mergeSort(right)
    }

    return {
        merge(left, right)
    }


}

mergeSort(testArray)