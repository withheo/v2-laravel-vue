<template>
    <div>
        <div @click="pageChange('home')"> HOME </div>
        <div @click="pageChange('search')"> SEARCH </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { pushToSearchPage } from '../compositions/useGoPage';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {      
        const router = useRouter();         
        const movePage = pushToSearchPage();

        const pageChange = (w: any) => {
           movePage.goPage(w);        
        }

        return {
            pageChange,
        }
    },
})
</script>
