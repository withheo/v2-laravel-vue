<template>
  <div>
    Home
    <div> 
      <Nav/>
    </div>
    <div> 
     
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/src/components/Nav.vue';

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    
  },
})
</script>
