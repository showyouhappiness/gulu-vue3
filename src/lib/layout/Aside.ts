import { defineComponent, h } from 'vue';

const CoastAside = defineComponent({
  name: 'GuluAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'aside',
        {
          class: 'Gulu-aside',
          style: { width: props.width },
        },
        slots.default?.(),
      );
  },
});

export default CoastAside;
