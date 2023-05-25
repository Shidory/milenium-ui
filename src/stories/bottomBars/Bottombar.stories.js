import MuiBottomBar from './Bottombar.vue';

export default {
  title: 'Molecules/BottomBar',
  component: MuiBottomBar,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'info', 'success', 'warning', 'error'],
      defaultValue: 'default',
    },
  },
};

const Template = (args) => ({
  components: { MuiBottomBar },
  setup() {
    return { args };
  },
  template: '<MuiBottomBar v-bind="args" />',
});

export const Default = Template.bind({});
// Default.args = {
//   variant: 'default',
//   size: 'medium',
//   label: 'Default',
// };