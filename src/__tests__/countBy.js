import { countBy } from '../countBy';

describe('Core.countBy', () => {
  const albums = [
    { title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque' },
    { title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock' },
    { title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz' },
    { title: 'Fly By Night', artist: 'Rush', genre: 'Rock' },
    {
      title: 'Goldberg Variations',
      artist: 'Daniel Barenboim',
      genre: 'Baroque',
    },
    {
      title: 'New World Symphony',
      artist: 'Leonard Bernstein',
      genre: 'Romantic',
    },
    { title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz' },
    { title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal' },
    { title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern' },
    { title: 'Evita', artist: 'Various', genre: 'Broadway' },
    { title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk' },
    {
      title: 'The Magic Flute',
      artist: 'John Eliot Gardiner',
      genre: 'Classical',
    },
  ];

  const prop = (p) => (obj) => obj[p];
  const derivedGenre = (album) => {
    const remap = {
      Baroque: 'Classical',
      Modern: 'Classical',
      Romantic: 'Classical',
      Metal: 'Rock' /*  etc */,
    };

    const genre = prop('genre')(album);
    return remap[genre] || genre;
  };

  test('counts by a simple property of the objects', () => {
    expect(countBy(prop('genre'), albums)).toEqual({
      Baroque: 2,
      Rock: 2,
      Jazz: 2,
      Romantic: 1,
      Metal: 1,
      Modern: 1,
      Broadway: 1,
      Folk: 1,
      Classical: 1,
    });
  });

  test('counts by a more complex function on the objects', () => {
    expect(countBy(derivedGenre, albums)).toEqual({
      Classical: 5,
      Rock: 3,
      Jazz: 2,
      Broadway: 1,
      Folk: 1,
    });
  });

  test('will force items into strings due to the nature of js objects', () => {
    const list = [() => {}, 1, {}, []];
    const id = (x) => x;
    expect(countBy(id, list)).toEqual({
      '() => {}': 1,
      1: 1,
      '[object Object]': 1,
      '': 1,
    });
  });
});
