import MuiAlert from './Alert.vue';

export default {
  title: 'Molecules/Alert',
  component: MuiAlert,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error'],
      defaultValue: 'success',
    },
  },
};

const Template = (args) => ({
  components: { MuiAlert },
  setup() {
    return { args };
  },
  template: '<MuiAlert v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Succès : Message confirmation',
};
