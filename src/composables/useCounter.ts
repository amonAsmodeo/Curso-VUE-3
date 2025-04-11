import { computed, ref } from 'vue';

export const useCounter = (inicialValue: number = 5) => {
  /* definicion de variables reactivas */
  const counter = ref(inicialValue);

  /* propiedad calculada / computada de solo lectura */
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter,
  };
};
