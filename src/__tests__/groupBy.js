/* eslint-disable no-nested-ternary */
import groupBy from '../groupBy';

describe('Core.groupBy', () => {
  test('splits the list into groups according to the grouping function', () => {
    const grade = score =>
      score < 65
        ? 'F'
        : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';

    const students = [
      { name: 'Abby', score: 84 },
      { name: 'Brad', score: 73 },
      { name: 'Chris', score: 89 },
      { name: 'Dianne', score: 99 },
      { name: 'Eddy', score: 58 },
      { name: 'Fred', score: 67 },
      { name: 'Gillian', score: 91 },
      { name: 'Hannah', score: 78 },
      { name: 'Irene', score: 85 },
      { name: 'Jack', score: 69 },
    ];

    const byGrade = student => grade(student.score || 0);

    expect(groupBy(byGrade, students)).toEqual({
      A: [{ name: 'Dianne', score: 99 }, { name: 'Gillian', score: 91 }],
      B: [
        { name: 'Abby', score: 84 },
        { name: 'Chris', score: 89 },
        { name: 'Irene', score: 85 },
      ],
      C: [{ name: 'Brad', score: 73 }, { name: 'Hannah', score: 78 }],
      D: [{ name: 'Fred', score: 67 }, { name: 'Jack', score: 69 }],
      F: [{ name: 'Eddy', score: 58 }],
    });
  });

  test('returns an empty object if given an empty array', () => {
    const id = x => x;
    expect(groupBy(id, [])).toEqual({});
  });
});
