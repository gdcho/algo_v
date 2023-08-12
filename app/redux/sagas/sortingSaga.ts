import { takeLatest, select, put } from "redux-saga/effects";
import { bubbleSortGenerator } from "../../lib/algorithms/bubbleSort";
import { quickSortGenerator } from "../../lib/algorithms/quickSort";
import { heapSortGenerator } from "../../lib/algorithms/heapSort";
import { insertionSortGenerator } from "../../lib/algorithms/insertionSort";
import { mergeSortGenerator } from "../../lib/algorithms/mergeSort";
import { selectionSortGenerator } from "../../lib/algorithms/selectionSort";
import { SagaIterator } from "redux-saga";
import { updateArray } from "../../redux/actions";
import { START_SORTING } from "../../redux/actions";
import { delay } from "redux-saga/effects";

function* handleStartSorting(): SagaIterator {
  console.log("handleStartSorting triggered");
  const array = yield select((state) => state.array);
  const algorithm = yield select((state) => state.algorithm);

  console.log("Selected algorithm:", algorithm);
  console.log("Initial array:", array);

  let sortingGenerator;
  switch (algorithm) {
    case "bubbleSort":
      sortingGenerator = bubbleSortGenerator([...array]);
      break;
    case "quickSort":
      sortingGenerator = quickSortGenerator([...array]);
      break;
    case "heapSort":
      sortingGenerator = heapSortGenerator([...array]);
      break;
    case "insertionSort":
      sortingGenerator = insertionSortGenerator([...array]);
      break;
    case "mergeSort":
      sortingGenerator = mergeSortGenerator([...array]);
      break;
    case "selectionSort":
      sortingGenerator = selectionSortGenerator([...array]);
      break;
    default:
      return;
  }

  let sortedArray;
  let result = sortingGenerator.next();
  while (!result.done) {
    sortedArray = result.value;
    yield put(updateArray(sortedArray));
    yield delay(50);
    result = sortingGenerator.next();
  }

  console.log("Sorted array:", sortedArray);
}

export function* watchStartSorting(): SagaIterator {
  yield takeLatest(START_SORTING, handleStartSorting);
}
