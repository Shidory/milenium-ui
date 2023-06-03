import MuiOverlay from './Overlay.vue';

export default {
  title: 'Atoms/Overlay',
  component: MuiOverlay,
};

const Template = (args) => ({
  components: { MuiOverlay },

  setup() {
    return { args };
  },

  template: '<MuiOverlay />',
});

export const Common = Template;

