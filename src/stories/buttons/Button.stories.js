import DuiButton from './Button.vue';

export default {
  title: 'Atoms/Button',
  component: DuiButton,
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'info', 'success', 'warning', 'error'],
      defaultValue: 'default',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'raised', 'outlined', 'text', 'squared'],
      defaultValue: 'default',
    },
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
      defaultValue: false,
    },
    loading: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DuiButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<DuiButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default',
};

export const Raised = Template.bind({});
Raised.args = {
  variant: 'raised',
  size: 'medium',
  label: 'Default',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  size: 'medium',
  label: 'Default',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  size: 'medium',
  label: 'Default',
};

export const Squared = Template.bind({});
Squared.args = {
  variant: 'squared',
  size: 'medium',
  label: 'Default',
};
