import MuiHeading from './Heading.vue';

export default {
  title: 'Atoms/Heading',
  component: MuiHeading,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
};

const Template = (args) => ({
  components: { MuiHeading },

  setup() {
    return { args };
  },

  template: '<MuiHeading />',
});

export const Primary = Template;
Primary.args = {
  variant: 'primary',
};

