type SettingsAction = 
  | { type: 'SET_SPEED'; payload: number }
  | { type: 'SET_SIZE'; payload: number };

export const settingsReducer = (state: { speed: number; size: number } = { speed: 1, size: 100 }, action: SettingsAction) => {
    switch (action.type) {
      case 'SET_SPEED':
        return { ...state, speed: action.payload };
      case 'SET_SIZE':
        return { ...state, size: action.payload };
      default:
        return state;
    }
  };
  