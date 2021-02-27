import _ from 'lodash';

export const trim = <T extends unknown>(
  items: T[],
  sortValue: (item: T) => any,
  {
    removeFromStart,
    removeFromEnd,
  }: { removeFromStart?: number; removeFromEnd?: number }
) => {
  const sorted = _.sortBy(items, [sortValue]);

  const sliced = sorted.slice(
    removeFromStart || 0,
    sorted.length - (removeFromEnd || 0)
  );

  return sliced;
};
