type StatusAction =
  | { type: "START_SORTING" }
  | { type: "PAUSE_SORTING" }
  | { type: "STOP_SORTING" };

export const statusReducer = (
  state: string = "idle",
  action: StatusAction
): string => {
  switch (action.type) {
    case "START_SORTING":
      return "sorting";
    case "PAUSE_SORTING":
      return "paused";
    case "STOP_SORTING":
      return "idle";
    default:
      return state;
  }
};
