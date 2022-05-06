import { defineComponent, h } from 'vue';

const CoastHeader = defineComponent({
  name: 'GuluHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'header',
        {
          class: 'Gulu-header',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
});

export default CoastHeader;
