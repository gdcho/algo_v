export function* quickSortGenerator(arr: number[]): Generator<{type: string, indices: number[], array: number[]}, void, void> {
    const copiedArr = [...arr];
  
    const partition = function* (arr: number[], low: number, high: number): Generator<{type: string, indices: number[], array: number[]}, number, void> {
        const pivot = arr[high];
        let i = low - 1;
  
        for (let j = low; j <= high - 1; j++) {
            yield { type: "compare", indices: [j, high], array: arr.slice() };
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                yield { type: "swap", indices: [i, j], array: arr.slice() };
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        yield { type: "swap", indices: [i + 1, high], array: arr.slice() };
        return i + 1;
    };
  
    const quickSortRecursive = function* (arr: number[], low: number, high: number): Generator<{type: string, indices: number[], array: number[]}, void, void> {
      if (low < high) {
          const pi = yield* partition(arr, low, high);
          yield* quickSortRecursive(arr, low, pi - 1);
          yield* quickSortRecursive(arr, pi + 1, high);
      }
    };
  
    yield* quickSortRecursive(copiedArr, 0, copiedArr.length - 1);
  }
  