import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import SwitchDemo from "../components/Switch/SwitchDemo.vue";
import ButtonDemo from "../components/Button/ButtonDemo.vue";
import DialogDemo from "../components/Dialog/DialogDemo.vue";
import TabsDemo from "../components/Tabs/TabsDemo.vue";
import PopOver from "../components/PopOver/PopOverDemo.vue";
import Toast from "../components/Toast/ToastDemo.vue";
import Layout from "../components/Layout/LayoutDemo.vue";
import Layout1 from "../components/Layout1/LayoutDemo.vue";
import Grid from "../components/grid/GridDemo.vue";

import { h } from 'vue';
import Markdown from '../components/Markdown.vue';
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

export const router = createRouter({
    history,
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
                { path: "toast", component: Toast },
                { path: "layout", component: Layout },
                { path: "layout1", component: Layout1 },
                { path: "grid", component: Grid },
            ],
        },
    ],
});
router.afterEach(() => {
});