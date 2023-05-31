import MuiModal from './Modal.vue';

export default {
  title: 'Molecules/Modal',
  component: MuiModal,
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { MuiModal },
  setup() {
    return { args };
  },
  template: '<MuiModal v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  size: 'small',
};
