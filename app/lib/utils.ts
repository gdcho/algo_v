export const generateRandomArray = (
  length: number,
  min: number,
  max: number
): number[] => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const DEFAULT_ARRAY_LENGTH = 80;
export const DEFAULT_MIN_VALUE = 1;
export const DEFAULT_MAX_VALUE = 150;

export const swap = (arr: number[], i: number, j: number): void => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
