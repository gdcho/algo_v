export function* insertionSortGenerator(arr: number[]): Generator<{type: string, indices: number[], array: number[]}, void, void> {
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
          yield { type: "compare", indices: [j, j + 1], array: arr.slice() }; 
          arr[j + 1] = arr[j];
          yield { type: "swap", indices: [j, j + 1], array: arr.slice() };  
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  yield { type: "sorted", indices: [], array: arr.slice() }; 
}
