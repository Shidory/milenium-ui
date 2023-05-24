import MuiLoader from './Loader.vue';

export default {
  title: 'Atoms/Loader',
  component: MuiLoader,
  argTypes: {
    isLoading: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

const Template = (args) => ({
  components: { MuiLoader },
  setup() {
    return { args };
  },
  template: '<MuiLoader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};
