export function* mergeSortGenerator(arr: number[]): Generator<{type: string, indices: number[], array: number[]}, number[], void> {
    if (arr.length <= 1) {
        yield { type: "compare", indices: [], array: arr.slice() };
        return arr;
    }
  
    const merge = function* (left: number[], right: number[]): Generator<{type: string, indices: number[], array: number[]}, number[], void> {
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
            yield { type: "compare", indices: [leftIndex, rightIndex], array: result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) };
        }
  
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
            yield { type: "compare", indices: [leftIndex], array: result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) };
        }
  
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
            yield { type: "compare", indices: [rightIndex], array: result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) };
        }
  
        return result;
    };
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    const leftSorted: number[] = yield* mergeSortGenerator(left);
    const rightSorted: number[] = yield* mergeSortGenerator(right);
  
    const sortedArray = yield* merge(leftSorted, rightSorted);
    yield { type: "sorted", indices: [], array: sortedArray };
    return sortedArray;
  }
  