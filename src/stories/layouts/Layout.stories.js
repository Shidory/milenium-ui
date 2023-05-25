import MuiLayout from './Layout.vue';

export default {
  title: 'Organisms/Layout',
  component: MuiLayout,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { MuiLayout },
  setup() {
    return { args };
  },
  template: '<MuiLayout v-bind="args" />',
});

export const Default = Template.bind({});
// Default.args = {
//   variant: 'default',
//   size: 'medium',
//   label: 'Default',
// };