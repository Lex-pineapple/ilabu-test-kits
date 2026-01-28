type ObjectWithId = {
  [key: string]: unknown;
  id: string;
};

export const removeFromObjectArray = <T extends ObjectWithId>(
  array: T[],
  foundId: string,
) => array.filter((item) => item.id !== foundId);
