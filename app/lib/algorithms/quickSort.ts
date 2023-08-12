export function* quickSortGenerator(arr: number[]): Generator<number[], void, void> {
  const copiedArr = [...arr];

  const partition = function* (arr: number[], low: number, high: number): Generator<number[], number, void> {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
          if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
              yield arr.slice();
          }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      yield arr.slice();
      return i + 1;
  };

  const quickSortRecursive = function* (arr: number[], low: number, high: number): Generator<number[], void, void> {
    if (low < high) {
        let partitionResult = partition(arr, low, high);
        let piResult = partitionResult.next();
        while (!piResult.done) {
            yield piResult.value;
            piResult = partitionResult.next();
        }
        const pi = piResult.value as number;

        yield* quickSortRecursive(arr, low, pi - 1);
        yield* quickSortRecursive(arr, pi + 1, high);
    }
};

  yield* quickSortRecursive(copiedArr, 0, copiedArr.length - 1);
}