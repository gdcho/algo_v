// algo/quickSort.ts

export function quickSort(originalArr: number[]): any[] {
    const arr = [...originalArr];
    let animations = [];
    quickSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

function quickSortHelper(arr: number[], left: number, right: number, animations: any[]): void {
    if (left < right) {
        let pivotIndex = partition(arr, left, right, animations);
        quickSortHelper(arr, left, pivotIndex - 1, animations);
        quickSortHelper(arr, pivotIndex + 1, right, animations);
    }
}

function partition(arr: number[], left: number, right: number, animations: any[]): number {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            animations.push([i, j]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    animations.push([i, right]);
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

