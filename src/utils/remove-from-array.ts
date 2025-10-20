export const removeFromArray = <T>(array: T[], idx: number) => {
  const arrToSplice = [...array];
  arrToSplice.splice(idx, 1);
  return arrToSplice;
};
