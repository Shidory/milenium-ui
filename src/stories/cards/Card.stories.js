import MuiCard from './Card.vue';

export default {
  title: 'Atoms/Card',
  component: MuiCard,
};

const Template = (args) => ({
  components: { MuiCard },

  setup() {
    return { args };
  },

  template: '<MuiCard />',
});

export const Default = Template;

