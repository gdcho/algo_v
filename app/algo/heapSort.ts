// algo/heapSort.ts

export function heapSort(originalArr: number[]): any[] {
    const arr = [...originalArr];
    let n = arr.length;
    let animations = [];

    for(let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i, animations);

    for(let i = n - 1; i > 0; i--) {
        animations.push([0, i]);
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0, animations);
    }

    return animations;
}

function heapify(arr: number[], n: number, i: number, animations: any[]): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest])
        largest = left;

    if(right < n && arr[right] > arr[largest])
        largest = right;

    if(largest !== i) {
        animations.push([i, largest]);
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest, animations);
    }
}
