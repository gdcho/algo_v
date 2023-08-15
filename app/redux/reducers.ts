import { combineReducers } from "@reduxjs/toolkit";
import { arrayReducer } from "../redux/reducers/arrayReducer";
import { algorithmReducer } from "../redux/reducers/algorithmReducer";
import { statusReducer } from "../redux/reducers/statusReducer";
import { settingsReducer } from "../redux/reducers/settingsReducer";
import {
  SET_CURRENT_BUBBLE,
  SET_CURRENT_SWAPPERS,
  SET_CURRENT_SORTED,
  SET_RUNNING,
  MOVE_ELEMENT,
  MoveElementAction,
} from "../redux/actions";

const initialBubbleState: number[] = [];
const initialSwappersState: number[] = [];
const initialSortedState: number[] = [];
const initialRunningState: boolean = false;
const initialMoveElementState = {
  from: null,
  to: null,
};

type BubbleAction = {
  type: typeof SET_CURRENT_BUBBLE;
  payload: number[];
};

type SwappersAction = {
  type: typeof SET_CURRENT_SWAPPERS;
  payload: number[];
};

type SortedAction = {
  type: typeof SET_CURRENT_SORTED;
  payload: number[];
};

type RunningAction = {
  type: typeof SET_RUNNING;
  payload: boolean;
};

type ActionTypes =
  | BubbleAction
  | SwappersAction
  | SortedAction
  | RunningAction
  | MoveElementAction;

export const currentBubbleReducer = (
  state = initialBubbleState,
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_BUBBLE:
      return action.payload;
    default:
      return state;
  }
};

export const currentSwappersReducer = (
  state = initialSwappersState,
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_SWAPPERS:
      return action.payload;
    default:
      return state;
  }
};

export const currentSortedReducer = (
  state = initialSortedState,
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_CURRENT_SORTED:
      return action.payload;
    default:
      return state;
  }
};

export const runningReducer = (
  state = initialRunningState,
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_RUNNING:
      return action.payload;
    default:
      return state;
  }
};

export const moveElementReducer = (
  state = initialMoveElementState,
  action: ActionTypes
) => {
  switch (action.type) {
    case MOVE_ELEMENT:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  array: arrayReducer,
  algorithm: algorithmReducer,
  status: statusReducer,
  settings: settingsReducer,
  currentBubble: currentBubbleReducer,
  currentSwappers: currentSwappersReducer,
  currentSorted: currentSortedReducer,
  running: runningReducer,
  moveElement: moveElementReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
