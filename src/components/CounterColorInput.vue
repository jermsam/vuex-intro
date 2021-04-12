<template>
    <p>
     <input 
     style="text-align:center; outline:none; color:green;"
      placeholder="set counter color"
      v-model="colorCode"
      />
    </p>
</template>

<script>


export default {
   computed:{
    colorCode:{
      get(){
      
      return this.$store.state.color;
    },
    set(newColor){
this.$store.dispatch('setColorCode',newColor);
    }
    }
  }
}
</script>
