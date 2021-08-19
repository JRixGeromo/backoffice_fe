<template>
  <!-- <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"> -->
  <nav class="navbar navbar-white sticky-top flex-md-nowrap p-0">
    <div class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"></div>
    <!-- <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Zotter</a> -->

    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/profile" class="p-2 text-white text-decoration-none">{{
        name
      }}</router-link>
      <router-link
        to="/logout"
        class="p-2 text-white text-decoration-none"
        @click="logout"
        >Sign out</router-link
      >
    </nav>
  </nav>
</template>

<script lang="ts">
import { ref, computed, watch } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

export default {
  name: 'Nav',
  setup() {
    const name = ref('')
    const store = useStore()

    const user = computed(() => store.state.User.user)

    watch(user, () => {
      name.value = user.value.first_name + ' ' + user.value.last_name
    })

    const logout = async () => {
      await axios.post('logout')
    }

    return {
      name,
      logout,
    }
  },
}
</script>

<style scoped>
.text-white {
  color: #ebf1f6 !important;
}
</style>
