type AlgorithmAction = 
  | { type: 'SET_ALGORITHM'; payload: string };

  export const algorithmReducer = (state: string = 'bubbleSort', action: AlgorithmAction): string => {
    switch (action.type) {
      case 'SET_ALGORITHM':
        return action.payload;
      default:
        return state;
    }
  };
  
  