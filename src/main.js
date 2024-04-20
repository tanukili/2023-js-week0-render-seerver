import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // 載入 BS.css
import 'bootstrap'; // 載入 BS.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');