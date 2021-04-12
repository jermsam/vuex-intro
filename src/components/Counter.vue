<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name='colorPiker'/>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    
   <div class="counter-div" :style="{color:$store.state.color}">
   <square-counter/>
  <slot name='buttons'/>
   </div>
    <div class="counter-controls">
  
   <button class='action' @click="$store.dispatch('incrementCounter')">
  + random
   </button>
  </div>
  </div>
</template>

<script>
import SquareCounter from '@/components/SquareCounter'

export default {
  name: 'Counter',
  components:{SquareCounter},
  props: {
    msg: String
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.counter-div{
  display: flex;
  flex-direction: column;
height: 250px;
justify-content: center;
align-content: center;
color: #2c3e50;
font-size:3rem;
font-weight:bold;
}

 button {
  width:5rem;
  padding:1rem;
  margin: 0 10px;
  border-radius: 1rem;
  outline: none;
}

.action{
  background-color:green;
  color:white;
}


</style>
