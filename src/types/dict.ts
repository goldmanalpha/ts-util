export type Dict<T> = {
  [id: string]: T;
};

export type Dict2<TK extends string, T> = {
  [id in TK]: T;
};
