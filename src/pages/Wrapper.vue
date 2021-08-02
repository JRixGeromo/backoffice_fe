<template>
<Nav/>
  <section class="dashboard-main-sec">
    <div class="dash-content-main">
      <div class="sidebar-main-inner">
        <Menu/>
      </div>
      <div class="dash-content-area">
        <router-view/>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav';
import Menu from '@/components/Menu';
import axios from "axios";
import {onMounted} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
  name: "Wrapper",
  components: {
    Nav,
    Menu
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    onMounted(async () => {
      try {
        const {data} = await axios.get('user');

        await store.dispatch('User/setUser', data);
      } catch (e) {
        await router.push('/login');
      }
    });
  }
}
</script>
