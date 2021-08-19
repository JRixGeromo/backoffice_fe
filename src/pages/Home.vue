<template>
  <div>
    <vue-element-loading :active="isActive" :is-full-screen="true"/>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Zotter</a>

      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/login" class="p-2 text-white text-decoration-none">Sign in</router-link>
      </nav>
    </nav>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import {ref, onMounted} from 'vue';
import VueElementLoading from "vue-element-loading";

export default {
  name: "Home",
  components: {
    VueElementLoading
  },
  setup() {
    const isActive = ref([]);
    const router = useRouter();
    onMounted(async () => {
      isActive.value = true;
      await router.push('/login');
    })
    return {
      isActive
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
