import MuiDivider from './Divider.vue';

export default {
  title: 'Atoms/Divider',
  component: MuiDivider,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
};

const Template = (args) => ({
  components: { MuiDivider },

  setup() {
    return { args };
  },

  template: '<MuiDivider />',
});

export const Primary = Template;
Primary.args = {
  variant: 'primary',
};

