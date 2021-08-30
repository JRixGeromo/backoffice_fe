import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Bootstrap CSS
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'

// Custom Styles
import './assets/css/style.css'

// Bootstrap JS
//import './assets/js/bootstrap.min.js';

//axios.defaults.baseURL = 'http://appdev.smargasy.com:8000/api/';
//axios.defaults.baseURL = 'http://localhost:8000/api/';
//axios.defaults.baseURL = 'http://localhost:8081/api/' // rico
axios.defaults.baseURL = 'http://localhost:8000/api/' // dj
//axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';

axios.defaults.withCredentials = true

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
