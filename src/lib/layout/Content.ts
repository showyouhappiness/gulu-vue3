import { defineComponent, h } from 'vue';

const CoastContent = defineComponent({
  name: 'GuluContent',
  setup(props, { slots }) {
    return () => h('main', { class: 'Gulu-content' }, slots.default?.());
  },
});

export default CoastContent;
