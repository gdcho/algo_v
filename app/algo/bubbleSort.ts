// algo/bubbleSort.ts

export function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for(let i = 0; i < n; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);

    return arr;
}
