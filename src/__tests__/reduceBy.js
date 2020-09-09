/* eslint-disable no-nested-ternary */
import { reduceBy } from '../reduceBy';

describe('Core.reduceBy', () => {
  test('splits the list into groups according to the grouping function', () => {
    const grade = (score) =>
      score < 65
        ? 'F'
        : score < 70
        ? 'D'
        : score < 80
        ? 'C'
        : score < 90
        ? 'B'
        : 'A';

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

    const byGrade = (student) => grade(student.score || 0);
    const collectNames = (acc, student) => acc.concat(student.name);

    expect(reduceBy(collectNames, [], byGrade, students)).toEqual({
      A: ['Dianne', 'Gillian'],
      B: ['Abby', 'Chris', 'Irene'],
      C: ['Brad', 'Hannah'],
      D: ['Fred', 'Jack'],
      F: ['Eddy'],
    });
  });

  test('returns an empty object if given an empty array', () => {
    const byType = (obj) => obj.type;
    const sumValues = (acc, obj) => acc + obj.val;

    expect(reduceBy(sumValues, 0, byType, [])).toEqual({});
  });
});
