import { sum } from './suma';

  test('suma sin argumentos', () => {
    expect(sum()).toBe(0);
  });

  test('suma con dos arguemntos', () => {
    expect(sum(1, 2)).toBe(3);
  });