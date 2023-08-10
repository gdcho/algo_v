type ArrayAction =
  | { type: "SET_ARRAY"; payload: number[] }
  | { type: "RESET_ARRAY" };

export const arrayReducer = (
  state: number[] = [],
  action: ArrayAction
): number[] => {
  switch (action.type) {
    case "SET_ARRAY":
      return action.payload;
    case "RESET_ARRAY":
      return [];
    // ... other actions related to the array
    default:
      return state;
  }
};
