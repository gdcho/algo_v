type Action =
  | { type: "compare" | "sorted"; indices: number[]; array: number[] }
  | { type: "move"; from: number; to: number; array: number[] };

export function* mergeSortGenerator(
  arr: number[],
  startIndex = 0
): Generator<Action, number[], void> {
  if (arr.length <= 1) {
    yield { type: "compare", indices: [], array: arr.slice() };
    return arr;
  }

  const merge = function* (
    left: number[],
    right: number[],
    leftStart: number,
    rightStart: number
  ): Generator<Action, number[], void> {
    let leftIndex = 0;
    let rightIndex = 0;
    let k = 0;
    let mergedArray: number[] = new Array(left.length + right.length);

    while (leftIndex < left.length && rightIndex < right.length) {
      yield {
        type: "compare",
        indices: [leftStart + leftIndex, rightStart + rightIndex],
        array: arr.slice(),
      };
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray[k] = left[leftIndex];
        leftIndex++;
      } else {
        yield {
          type: "move",
          from: rightStart + rightIndex,
          to: leftStart + k,
          array: arr.slice(),
        };
        mergedArray[k] = right[rightIndex];
        rightIndex++;
      }
      k++;
    }

    while (leftIndex < left.length) {
      mergedArray[k] = left[leftIndex];
      leftIndex++;
      k++;
    }

    while (rightIndex < right.length) {
      mergedArray[k] = right[rightIndex];
      rightIndex++;
      k++;
    }

    for (let i = 0; i < mergedArray.length; i++) {
      arr[leftStart + i] = mergedArray[i];
    }

    yield {
      type: "move",
      from: leftStart,
      to: leftStart + mergedArray.length - 1,
      array: arr.slice(),
    };

    return arr.slice(leftStart, leftStart + mergedArray.length);
  };

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSorted: number[] = yield* mergeSortGenerator(left, startIndex);
  const rightSorted: number[] = yield* mergeSortGenerator(
    right,
    startIndex + mid
  );

  const sortedArray = yield* merge(
    leftSorted,
    rightSorted,
    startIndex,
    startIndex + mid
  );
  yield {
    type: "sorted",
    indices: Array.from(
      { length: sortedArray.length },
      (_, i) => i + startIndex
    ),
    array: sortedArray,
  };
  return sortedArray;
}
