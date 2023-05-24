import MuiBadge from './Badge.vue';

export default {
  title: 'Atoms/Badge',
  component: MuiBadge,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'info', 'success', 'warning', 'error'],
      defaultValue: 'default',
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MuiBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MuiBadge v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default',
};
