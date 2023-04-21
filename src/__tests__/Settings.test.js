import Settings from '../js/Settings';

test('testing class Settings', () => {
  const set = new Settings();

  expect(set.settings).toEqual([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'middle'],
  ]);
});
