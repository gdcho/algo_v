export function* bubbleSortGenerator(array: number[]): Generator<number[], void, void> {
    let n = array.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
                yield array.slice(); 
            }
        }
        n--;
    } while (swapped);
    yield array; 
}