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
      <button class="p-5 bg-blue-500 rounded-full" @click="counter++">+1</button>
      <button class="p-5 bg-blue-900" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2"></script>

<style scoped></style>
