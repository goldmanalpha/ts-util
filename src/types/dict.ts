export type Dict<T> = {
  [id: string]: T;
};

export type Dict2<TK extends string, T> = {
  [id in TK]: T;
};

export const reverseDict = <
  TK extends string,
  TV extends string
>(
  dict: Dict2<TV, TK>
) => {
  return Object.entries(dict).reduce(
    (acc, [key, value]) => {
      acc[value as TK] = key as TV;
      return acc;
    },
    {} as Dict2<TK, TV>
  );
};
