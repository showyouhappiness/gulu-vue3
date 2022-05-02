import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/Switch/SwitchDemo.vue";
import ButtonDemo from "../components/Button/ButtonDemo.vue";
import DialogDemo from "../components/Dialog/DialogDemo.vue";
import TabsDemo from "../components/Tabs/TabsDemo.vue";
import PopOver from "../components/PopOver/PopOverDemo.vue";

import { h } from 'vue';
import Markdown from '../components/Markdown.vue';
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md('intro') },
                { path: "get-started", component: md('get-started') },
                { path: "install", component: md('install') },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "popover", component: PopOver },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log("路由切换了");
});