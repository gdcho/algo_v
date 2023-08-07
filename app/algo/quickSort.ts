// algo/quickSort.ts

export function quickSort(originalArr: number[], left = 0, right = originalArr.length - 1): number[] {
    const arr = [...originalArr];
    let index;

    if(arr.length > 1){
        index = partition(arr, left, right);
        if(left < index - 1){
            quickSort(arr, left, index - 1);
        }
        if(index < right){
            quickSort(arr, index, right);
        }
    }

    return arr;
}

function partition(arr: number[], left: number, right: number): number {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i <= j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}
