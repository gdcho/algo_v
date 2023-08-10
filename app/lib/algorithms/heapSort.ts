export const heapSort = (arr: number[]): number[] => {
    let n = arr.length;
  
    const swap = (i: number, j: number) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
  
    const heapify = (n: number, i: number) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;
  
      if (largest !== i) {
        swap(i, largest);
        heapify(n, largest);
      }
    };
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  
    for (let i = n - 1; i > 0; i--) {
      swap(0, i);
      heapify(i, 0);
    }
  
    return arr;
  };
  