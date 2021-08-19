<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    
  </nav>
</template>

<script lang="ts">
import {ref, computed, watch} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name: "Nav",
  setup() {
    const name = ref('');
    const store = useStore();

    const user = computed(() => store.state.User.user);

    watch(user, () => {
      name.value = user.value.first_name + ' ' + user.value.last_name;
    });

    const logout = async () => {
      await axios.post('logout');
    }

    return {
      name,
      logout
    }
  }
}
</script>

