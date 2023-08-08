// algo/selectionSort.ts

export function selectionSort(originalArr: number[]): any[] {
    const arr = [...originalArr];
    let n = arr.length;
    let animations = [];

    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j; 
            }
        }
        if(min != i){
            animations.push([i, min]);
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return animations;
}
