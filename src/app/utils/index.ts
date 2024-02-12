export const getRandomNumber = (min: number, max: number) => {
  if (min >= max) {
    throw new Error('Min must be less than or equal to max');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const numberExistsInArray = (arr: number[], number: number) => {
  if (Array.isArray(arr)) {
    return arr.includes(number);
  }
  console.error('First argument is not an array');
  return 0;
};

export const generateUniqueRandomNumber = (
  array: number[],
  min: number,
  max: number
): { randomNumber: number; arr: number[] } => {
  let arr: number[] = array;
  if (array.length === max) {
    arr = [];
  }
  let randomNumber;
  do {
    randomNumber = getRandomNumber(min, max);
  } while (numberExistsInArray(arr, randomNumber));

  arr.push(randomNumber);

  return { randomNumber, arr };
};
