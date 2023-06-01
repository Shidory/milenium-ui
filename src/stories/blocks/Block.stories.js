import MuiBlock from './Block.vue';

export default {
  title: 'Molecules/Block',
  component: MuiBlock,
  argTypes: {
    onClick: {},
    variant: {
      control: { type: 'select' },
      options: ['default', 'action'],
      defaultValue: 'default',
    },
  },
};

const Template = (args) => ({
  components: { MuiBlock },
  setup() {
    return { args };
  },
  template: '<MuiBlock v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

