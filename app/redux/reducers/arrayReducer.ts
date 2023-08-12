import { UPDATE_ARRAY } from "../actions";

type ArrayAction =
  | { type: "SET_ARRAY"; payload: number[] }
  | { type: "RESET_ARRAY" }
  | { type: typeof UPDATE_ARRAY; payload: number[] };

export const arrayReducer = (
  state: number[] = [],
  action: ArrayAction
): number[] => {
  switch (action.type) {
    case "SET_ARRAY":
      return action.payload;
    case UPDATE_ARRAY:
      return action.payload;
    case "RESET_ARRAY":
      window.location.reload();
    default:
      return state;
  }
};
