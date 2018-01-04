import reduceRight from '../reduceRight';

test('Core.reduceRight', () => {
  {
    const actual = reduceRight((x, y) => x.concat(y), [])([1, 2, 3, 4]);
    const expected = [4, 3, 2, 1];

    expect(actual).toEqual(expected);
  }
});
