export const bubbleSort = (array: number[]): number[] => {
    let n = array.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        n--; 
    } while (swapped); 

    return array;
};
