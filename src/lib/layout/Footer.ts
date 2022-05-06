import { defineComponent, h } from 'vue';

const CoastFooter = defineComponent({
  name: 'GuluFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'footer',
        {
          class: 'Gulu-footer',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
});

export default CoastFooter;
