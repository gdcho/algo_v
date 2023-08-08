// algo/mergeSort.ts

export function mergeSort(originalArr: number[]): any[] {
    const arr = [...originalArr];
    let animations = [];
    if (arr.length < 2)
        return animations;

    mergeSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

function mergeSortHelper(arr: number[], start: number, end: number, animations: any[]): void {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSortHelper(arr, start, mid, animations);
        mergeSortHelper(arr, mid + 1, end, animations);
        merge(arr, start, mid, end, animations);
    }
}

function merge(arr: number[], start: number, mid: number, end: number, animations: any[]): void {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);
    let k = start;

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            animations.push([k, left[0]]);
            arr[k++] = left.shift()!;
        } else {
            animations.push([k, right[0]]);
            arr[k++] = right.shift()!;
        }
    }

    while (left.length) {
        animations.push([k, left[0]]);
        arr[k++] = left.shift()!;
    }

    while (right.length) {
        animations.push([k, right[0]]);
        arr[k++] = right.shift()!;
    }
}

