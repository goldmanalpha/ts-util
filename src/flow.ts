import _ from 'lodash';

export const valueOrThrow = (
  value: any,
  errorExpression: any = 'unexpected value null/undefined'
) => {
  if (value === null || value === undefined) {
    throw errorExpression;
  }

  return value;
};
