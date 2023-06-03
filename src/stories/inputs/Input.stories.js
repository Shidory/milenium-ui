import MuiInput from './Input.vue';

export default {
  title: 'Atoms/Input',
  component: MuiInput,
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { MuiInput },
  setup() {
    return { args };
  },
  template: '<MuiInput v-bind="args" />',
});

export const Default = Template.bind({});

