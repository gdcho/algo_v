export function* mergeSortGenerator(arr: number[], startIndex = 0): Generator<{type: string, indices: number[], array: number[]}, number[], void> {
    if (arr.length <= 1) {
        yield { type: "compare", indices: [], array: arr.slice() };
        return arr;
    }
  
    const merge = function* (left: number[], right: number[], leftStart: number, rightStart: number): Generator<{type: string, indices: number[], array: number[]}, number[], void> {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
  
        while (leftIndex < left.length && rightIndex < right.length) {
            yield { type: "compare", indices: [leftStart + leftIndex, rightStart + rightIndex], array: result.concat(left).concat(right) };
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
  
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
  
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
  
        return result;
    };
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    const leftSorted: number[] = yield* mergeSortGenerator(left, startIndex);
    const rightSorted: number[] = yield* mergeSortGenerator(right, startIndex + mid);
  
    const sortedArray = yield* merge(leftSorted, rightSorted, startIndex, startIndex + mid);
    yield { type: "sorted", indices: [], array: sortedArray };
    return sortedArray;
}