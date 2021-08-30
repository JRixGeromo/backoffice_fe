<template>
  <!-- <vue-element-loading :active="isActive" :is-full-screen="true" /> -->
  <Nav />
  <section class="dashboard-main-sec">
    <div class="dash-content-main">
      <div class="sidebar-main-inner">
        <Menu />
      </div>
      <div class="dash-content-area">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav'
import Menu from '@/components/Menu'
import axios from 'axios'
import { /* ref, */ onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
// import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Wrapper',
  components: {
    Nav,
    Menu,
    // VueElementLoading,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    // const isActive = ref([])

    onMounted(async () => {
      try {
        // isActive.value = true
        const { data } = await axios.get('user')
        // isActive.value = false
        await store.dispatch('User/setUser', data)
      } catch (e) {
        // isActive.value = false
        await router.push('/login')
      }
    })

    return {
      // isActive,
    }
  },
}
</script>
