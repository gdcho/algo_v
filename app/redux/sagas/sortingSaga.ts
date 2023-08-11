import { takeLatest, select, put } from "redux-saga/effects";
import { bubbleSort } from "../../lib/algorithms/bubbleSort";
import { quickSort } from "../../lib/algorithms/quickSort";
import { heapSort } from "../../lib/algorithms/heapSort";
import { insertionSort } from "../../lib/algorithms/insertionSort";
import { mergeSort } from "../../lib/algorithms/mergeSort";
import { selectionSort } from "../../lib/algorithms/selectionSort";
import { SagaIterator } from 'redux-saga';
import { updateArray } from "../../redux/actions";
import { START_SORTING } from "../../redux/actions";

function* handleStartSorting(): SagaIterator {
  console.log("handleStartSorting triggered"); 
  const array = yield select((state) => state.array);
  const algorithm = yield select((state) => state.algorithm);

  console.log("Selected algorithm:", algorithm); 
  console.log("Initial array:", array); 

  let sortedArray;
  switch (algorithm) {
    case "bubbleSort":
      sortedArray = bubbleSort([...array]);
      break;
    case "quickSort":
      sortedArray = quickSort([...array]);
      break;
    case "heapSort":
      sortedArray = heapSort([...array]);
      break;
    case "insertionSort":
      sortedArray = insertionSort([...array]);
      break;
    case "mergeSort":
      sortedArray = mergeSort([...array]);
      break;
    case "selectionSort":
      sortedArray = selectionSort([...array]);
      break;
    default:
      return;
  }

  yield put(updateArray(sortedArray));

  console.log("Sorted array:", sortedArray); 
}

export function* watchStartSorting(): SagaIterator {
  yield takeLatest(START_SORTING, handleStartSorting);
}
