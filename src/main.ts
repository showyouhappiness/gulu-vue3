import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store/index'

import "./lib/gulu.scss";
import "./index.scss";
import './lib/svg.js'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';


const app = createApp(App);
app.use(store).use(router);
app.mount("#app");
app.component("Markdown", Markdown)