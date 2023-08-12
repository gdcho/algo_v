export function* bubbleSortGenerator(array: number[]): Generator<{type: string, indices: number[], array: number[]}, void, void> {
    let n = array.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            yield { type: "compare", indices: [i, i + 1], array: array.slice() };
            
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
                yield { type: "swap", indices: [i, i + 1], array: array.slice() }; 
            }
        }
        n--;
    } while (swapped);
    yield { type: "sorted", indices: [], array: array.slice() }; 
}
