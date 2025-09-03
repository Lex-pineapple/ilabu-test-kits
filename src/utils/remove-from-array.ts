export const removeFromArray = (array: unknown[], idx: number) => {
  const arrToSplice = [...array];
  arrToSplice.splice(idx, 1);
  return arrToSplice;
};
