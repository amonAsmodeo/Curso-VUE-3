import { expect, test, describe } from 'vitest';
import { sum, addArray } from '@/helpers/sum';

describe('add function', () => {
  // caso de evaluacion para el helper sum
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estimulo
    const result = sum(a, b);

    // el comportamiento esperado
    expect(result).toBe(a + b);
  });
});

// describe es para agrupar las diferenes pruebas de un elemento
describe('addArray function', () => {
  // caso de evaluacion para la funcion addArray
  test('Should return 0 if the array is empty', () => {
    // Preparacion
    const numberArray = <number[]>[];

    // Estimulo
    const result = addArray(numberArray);

    // El comportamiento esperado
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    // preparacion
    const numberArray = [5, 5];

    // Estimulo
    const result = addArray(numberArray);

    // el comportamiento esperado

    expect(result).toBe(10);
  });
});
