<template>
  <div>
    Search
    <div> 
      <Nav/>
    </div>
    <div @click="pageChange('search')"> 
      여길 클릭하면 다시 moutned 하나?
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import Nav from '@/src/components/Nav.vue';
//import { pushToSearchPage  } from '../compositions/useGoPage';
import { useRouter, useRoute  } from 'vue-router';

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    const router = useRouter();  
    const route = useRoute();

    const pageChange = (w: any) => {
      console.log("ㅋㄹ릭")
      //  pushToSearchPage(router, w, { 'test':1 });  
        //router.go(router.currentRoute.value);         
      }

    onMounted(()=> {
      console.log('search Loaded');
    })

    watch(
      () => route.query,
      (newValue, oldValue) => {
        console.log('Query string changed:', newValue, oldValue);
      },
    );
   


    return {
      pageChange,
    }
  },
})
</script>
