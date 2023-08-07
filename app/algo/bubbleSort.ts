// algo/bubbleSort.ts

export function bubbleSort(originalArr: number[]): any[] {
  const arr = [...originalArr]; 
  let n = arr.length;
  let swapped: boolean;
  let animations = [];

  do {
    swapped = false;
    for(let i = 0; i < n - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;

        animations.push([i, i + 1]);
      }
    }
  } while(swapped);

  return animations;
}
