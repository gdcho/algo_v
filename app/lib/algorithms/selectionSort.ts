export function* selectionSortGenerator(arr: number[]): Generator<{type: string, indices: number[], array: number[]}, void, void> {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
            yield { type: "compare", indices: [i, j], array: arr.slice() };
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            yield { type: "swap", indices: [i, minIdx], array: arr.slice() };
        }
    }
}
