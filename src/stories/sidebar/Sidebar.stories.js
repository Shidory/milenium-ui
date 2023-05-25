import MuiSidebar from './Sidebar.vue';

export default {
  title: 'Organisms/Sidenav',
  component: MuiSidebar,
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
  components: { MuiSidebar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MuiSidebar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default',
};

// if (arrow.length) {
//   for (let i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener("click", (e)=>{
//       console.log('here')
//       let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
//       arrowParent.classList.toggle("showMenu");
//     });
//   }
//   let sidebar = document.querySelector(".sidebar");
//   let sidebarBtn = document.querySelector(".bx-menu");
//   console.log(sidebarBtn);
//   sidebarBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("close");
//   });
// }

