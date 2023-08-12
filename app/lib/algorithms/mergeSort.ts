export function* mergeSortGenerator(arr: number[]): Generator<number[], number[], number[]> {
  if (arr.length <= 1) {
      yield arr;
      return arr;
  }

  const merge = function* (left: number[], right: number[]): Generator<number[], number[], number[]> {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
              result.push(left[leftIndex]);
              leftIndex++;
          } else {
              result.push(right[rightIndex]);
              rightIndex++;
          }
          yield result.slice();
      }

      while (leftIndex < left.length) {
          result.push(left[leftIndex]);
          leftIndex++;
          yield result.slice();
      }

      while (rightIndex < right.length) {
          result.push(right[rightIndex]);
          rightIndex++;
          yield result.slice();
      }

      return result;
  };

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSorted: number[] = yield* mergeSortGenerator(left);
  const rightSorted: number[] = yield* mergeSortGenerator(right);

  const sortedArray = yield* merge(leftSorted, rightSorted);
  return sortedArray;
}
