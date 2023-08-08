// algo/inserionSort.ts

export function insertionSort(originalArr: number[]): any[] {
    const arr = [...originalArr];
    let n = arr.length;
    let animations = [];

    for(let i = 1; i < n; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            animations.push([j, j+1]);
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return animations;
}

