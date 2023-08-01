// algo/inserionSort.ts

export function insertionSort(arr: number[]): number[] {
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
