import MuiDrawer from './Drawer.vue';

export default {
  title: 'Organisms/Drawer',
  component: MuiDrawer,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { MuiDrawer },
  setup() {
    return { args };
  },
  template: '<MuiDrawer v-bind="args" />',
});

export const Default = Template.bind({});
