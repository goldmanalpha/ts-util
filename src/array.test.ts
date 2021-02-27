import { assert } from 'console';
import { trim } from './array';

describe('trim', () => {
  const test = [3, 2, 1];

  const doesntMutateParamArray = () => {
    expect([3, 2, 1]).toEqual(test);
  };

  it('returns complete array when not trimming', () => {
    const result = trim(test, (x) => 1, {});

    expect(test).toEqual(result);
    doesntMutateParamArray();
  });
  it('sorts the array', () => {
    const result = trim(test, (x) => x, {});

    expect([1, 2, 3]).toEqual(result);
    doesntMutateParamArray();
  });

  it('removes from the front', () => {
    const result = trim(test, (x) => x, {
      removeFromStart: 1,
    });

    expect([2, 3]).toEqual(result);
    doesntMutateParamArray();
  });
  it('removes from the end', () => {
    const result = trim(test, (x) => x, {
      removeFromEnd: 1,
    });

    expect([1, 2]).toEqual(result);
    doesntMutateParamArray();
  });
  it('removes from the front and end', () => {
    const result = trim(test, (x) => x, {
      removeFromStart: 1,
      removeFromEnd: 1,
    });

    expect([2]).toEqual(result);
    doesntMutateParamArray();
  });
  it('removes from the front and end for objects', () => {
    const toObj = (n: Number) => ({ num: n });

    const result = trim(test.map(toObj), (x) => x.num, {
      removeFromStart: 1,
      removeFromEnd: 1,
    });

    expect([2].map(toObj)).toEqual(result);
  });
});
