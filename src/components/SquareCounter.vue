<template>
     <div :style="{color:$store.state.color}">
   {{$store.state.counter}}
   <div>
    {{$store.state.counter}} <sup>2</sup>
    = {{$store.getters.counterSquared}}
   </div>
  
   </div>
</template>