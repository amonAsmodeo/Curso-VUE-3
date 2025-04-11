<style scoped>
h1 {
  color: green;
}
</style>

<template>
  <section>
    <h3>Conuter : {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true, defaul: 5 },
  },

  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);
    // const counter = ref(counter);
    // const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
    };
  },
});
</script>
