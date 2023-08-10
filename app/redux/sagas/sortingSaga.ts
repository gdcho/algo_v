import { takeLatest, select, put } from "redux-saga/effects";
import { bubbleSort } from "../../lib/algorithms/bubbleSort";
import { quickSort } from "../../lib/algorithms/quickSort";
import { heapSort } from "@/app/lib/algorithms/heapSort";
import { insertionSort } from "@/app/lib/algorithms/insertionSort";
import { mergeSort } from "@/app/lib/algorithms/mergeSort";
import { selectionSort } from "@/app/lib/algorithms/selectionSort";
import { SagaIterator } from 'redux-saga';
import { updateArray } from "../../redux/actions";
import { START_SORTING } from "../../redux/actions";

function* handleStartSorting(): SagaIterator {
  const array = yield select((state) => state.array);
  const algorithm = yield select((state) => state.algorithm);

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
}

export function* watchStartSorting(): SagaIterator {
  yield takeLatest(START_SORTING, handleStartSorting);
}
