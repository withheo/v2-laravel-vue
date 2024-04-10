

import { useRouter } from "vue-router";

export function pushToSearchPage() {
    const router = useRouter();   
    const goPage = (go: any , query?:any) => {
        const q = Object.assign({}, query ?? {});
        if (go == 'home') {
            router.push({ name: 'home', query: { q: '1' } });
        } else {
            router.push({ name: 'search', query: q });
        }
    }
    return {
        goPage
    }
};



// pushToSearchPage 함수 정의
// EVENT BUS 로 만들고
//export const pushToSearchPage = (router: Router, go: any , query?:any) => {
  //  const q = Object.assign({}, query ?? {});
  //  if (go == 'home') {
    //    router.push({ name: 'home', query: { q: '1' } });
   // } else {
    //    router.push({ name: 'search', query: q });
   // }
//};

  