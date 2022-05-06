import { Component, computed, defineComponent, h, VNode } from 'vue';

const CoastLayout = defineComponent({
  name: 'GuluLayout',
  setup(props, { slots }) {
    const isHasAside = computed(() => {
      if (slots?.default) {
        const children: Array<VNode> = slots.default();
        return children.some(child => {
          const tag = (child.type as Component).name;
          return tag === 'GuluAside';
        });
      } else {
        return false;
      }
    });

    return () =>
      h(
        'section',
        { class: ['Gulu-layout', { 'Gulu-layout-has-aside': isHasAside.value }] },
        slots.default?.(),
      );
  },
});

export default CoastLayout;
