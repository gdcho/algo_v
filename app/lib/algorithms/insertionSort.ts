export function* insertionSortGenerator(arr: number[]): Generator<{type: string, indices: number[], array: number[]}, void, void> {
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
          yield { type: "swap", indices: [j + 1, j], array: arr.slice() };
      }
      arr[j + 1] = key;
      yield { type: "compare", indices: [j + 1, i], array: arr.slice() };
  }
}
