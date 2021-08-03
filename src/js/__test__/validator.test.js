import Validator from '../validator';

test('Метод должен вернуть true, если имя содержит 1 символ [a-z]', () => {
  const validated = new Validator();
  expect(validated.validateUsername('s')).toBeTruthy();
});

test('Метод должен вернуть true, если строка содержит только латинские буквы, тире -, подчёркивания _ и цифры (0-9)', () => {
  const validated = new Validator();
  expect(validated.validateUsername('sumrack_84-cool')).toBeTruthy();
});

test('Метод должен выбросить ошибку, если строка содержит символы, кроме латинских букв, тире -, подчёркивания _ и цифр (0-9)', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('sumrack[{^}]_84-cool')).toThrow();
});

test('Метод должен вернуть true, если строка не содержит подряд более трёх цифр, не начинается и не заканчивается цифрами, символами тире -, подчёркивания _', () => {
  const validated = new Validator();
  expect(validated.validateUsername('sumrack_84-cool')).toBeTruthy();
});

test('Метод должен выбросить ошибку, если строка содержит подряд более трёх цифр, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('sumrack_777-cool')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается цифрами, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('7sumrack-cool')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается цифрами, ', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('sumrack_cool7')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается символами подчёркивания', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('_sumrack_77-cool')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается символами подчёркивания', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('sumrack_77-cool_')).toThrow();
});

test('Метод должен выбросить ошибку, если строка начинается символами тире', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('-sumrack_77-cool')).toThrow();
});

test('Метод должен выбросить ошибку, если строка заканчивается символами тире', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('sumrack_77-cool-')).toThrow();
});