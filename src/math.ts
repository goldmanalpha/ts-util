import * as _ from 'lodash';
import { median } from 'mathjs';

// taken from rule1-monte-carlo where its tested
// TODO: put into class library
export const bucketizeByX = (
  list: number[],
  buckets = 10,
  decimals = 1
) => {
  if (!list.length) {
    return [];
  }

  buckets = Math.max(1, Math.round(buckets));

  const { max, min } = {
    max: Math.max(...list),
    min: Math.min(...list),
  };

  const diff = max - min;
  const bucketWidth = diff / buckets;

  const limits = [...Array(buckets).keys()].map((v) => {
    const limit = min + (diff * (v + 1)) / buckets;
    const retVal = {
      start: limit - bucketWidth,
      limit,
      midPoint: (2 * limit - bucketWidth) / 2,
      medianValue: 0,
      count: 0,
      numbers: [] as number[],
    };
    return retVal;
  });

  limits[limits.length - 1].limit += 0.01; //imprecise math :(

  const reduced = list.reduce((p, c: number) => {
    const index = Math.min(
      ...Object.entries(limits)
        .filter((le) => le[1].limit >= c)
        .map((le) => Number(le[0]))
    );

    p[index].numbers.push(c);

    return p;
  }, limits);

  reduced
    .filter((r) => r.numbers.length)
    .forEach((v) => {
      v.limit = _.round(v.limit, decimals);
      v.count = v.numbers.length;
      v.medianValue = _.round(median(v.numbers), decimals);
    });

  return reduced.filter((r) => r.numbers.length);
};
