<template>
    <div class="counter-controls">
   <button @click="$store.commit('decrementCounter')">
   -
   </button>
   <button @click="$store.commit('incrementCounter')">
  +
   </button>
  </div>
</template>

<style scoped>
 button {
  width:5rem;
  padding:1rem;
  margin: 0 10px;
}
</style>