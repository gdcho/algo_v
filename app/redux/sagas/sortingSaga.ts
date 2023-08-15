import { takeLatest, select, put } from "redux-saga/effects";
import { bubbleSortGenerator } from "../../lib/algorithms/bubbleSort";
import { quickSortGenerator } from "../../lib/algorithms/quickSort";
import { heapSortGenerator } from "../../lib/algorithms/heapSort";
import { insertionSortGenerator } from "../../lib/algorithms/insertionSort";
import { mergeSortGenerator } from "../../lib/algorithms/mergeSort";
import { selectionSortGenerator } from "../../lib/algorithms/selectionSort";
import { SagaIterator } from "redux-saga";
import { delay } from "redux-saga/effects";
import {
  updateArray,
  setCurrentBubble,
  setCurrentSwappers,
  setCurrentSorted,
  setRunning,
  START_SORTING,
  moveElement,
} from "../../redux/actions";

type SortingYieldValue = {
  type: "compare" | "swap" | "move";
  indices: number[];
  array: number[];
  from?: number;
  to?: number;
};

function* handleStartSorting(): SagaIterator {
  const array = yield select((state) => state.array);
  const algorithm = yield select((state) => state.algorithm);

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

  let finalSortedArray = [...array];
  let result = sortingGenerator.next() as IteratorResult<SortingYieldValue>;
  while (!result.done) {
    const { type, indices, array: updatedArray, from, to } = result.value;

    switch (type) {
      case "compare":
        yield put(setCurrentBubble(indices));
        yield delay(50);
        yield put(setCurrentBubble([]));
        break;
      case "swap":
        yield put(setCurrentSwappers(indices));
        yield delay(50);
        yield put(setCurrentSwappers([]));
        break;
      case "move":
        if (from !== undefined && to !== undefined) {
          yield put(moveElement(from, to));
          yield delay(50);
        }
        break;
    }

    yield put(updateArray(updatedArray));
    finalSortedArray = updatedArray;
    result = sortingGenerator.next() as IteratorResult<SortingYieldValue>;
  }

  yield put(setCurrentBubble([]));
  yield put(setCurrentSwappers([]));
  yield put(
    setCurrentSorted(finalSortedArray.map((_, index: number) => index))
  );

  yield put(setRunning(false));

}

export function* watchStartSorting(): SagaIterator {
  yield takeLatest(START_SORTING, handleStartSorting);
}

function* handleResetArray(): SagaIterator {
  window.location.reload();
}

export function* watchResetArray(): SagaIterator {
  yield takeLatest("RESET_ARRAY", handleResetArray);
}
