import { useCounter } from '@/composables/useCounter';
import { describe, expect, test } from 'vitest';

describe('UseCounter', () => {
  // Primero se prueba la configuracion por defecto
  test('initializes counter with provider default value', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(5 * 5);
  });

  test('inicializes counter whit provider initial value', () => {
    // valor inicial
    const initialValue = <number>10; // variable de tipo number
    //  desestructurar lo que regresa useCounter
    const { counter, squareCounter } = useCounter(initialValue);
    console.log('counter:', counter.value);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments counter correcly', () => {
    const { counter, squareCounter } = useCounter();
    // estimuo
    counter.value++;
    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
