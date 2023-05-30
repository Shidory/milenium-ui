import MuiSidenav from './Sidenav.vue';

export default {
  title: 'Organisms/Sidenav',
  component: MuiSidenav,
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
  components: { MuiSidenav },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MuiSidenav v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default',
};

