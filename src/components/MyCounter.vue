<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button class="p-2 m-1 bg-red-500 text-2xl hover:bg-red-800" @click="counter++">+1</button>
      <button class="p-2 m-1 bg-blue-500 text-2xl hover:bg-blue-800" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

// /* en ts */
interface Props {
  value?: number /* con el signo de interrogacion dice que es opcional */;
}

const props = defineProps<Props>();

console.log('las props en MyCounter.vue: ', props);

const { counter, squareCounter } = useCounter(props.value);

// import { computed, ref } from 'vue';

/*forma en JS */
// const props = defineProps({
//   value: { type: Number, required: true },
// });

/* indica que si el valor de props es undefined el valor por defecto sera 5*/
// const counter = ref(props.value ?? 5);
// const SquareCounter = computed(() => counter.value * counter.value);

// const counterAdd = () => {
//   return (counter.value = counter.value + 1);
// };

// const counterRes = () => {
//   return (counter.value = counter.value - 1);
// };
</script>
