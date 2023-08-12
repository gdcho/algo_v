export function* heapSortGenerator(arr: number[]): Generator<number[], void, void> {
  let n = arr.length;

  function* swap(i: number, j: number) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      yield arr.slice();
  }

  function* heapify(n: number, i: number): Generator<number[], void, void> {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;

      if (largest !== i) {
          yield* swap(i, largest);
          yield* heapify(n, largest);
      }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      yield* heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
      yield* swap(0, i);
      yield* heapify(i, 0);
  }
}
