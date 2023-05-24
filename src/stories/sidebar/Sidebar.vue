<template>
  <div class="sidenav">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <button class="dropdown-btn">The first
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
    <button class="dropdown-btn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <a href="#contact">Search</a>
  </div> 
</template>
  
<script>
import './sidebar.scss';
import { onMounted, reactive } from 'vue';

export default {
name: 'MuiSidebar',

props: {
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  variant: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
  loading: {
    type: Boolean,
  },
},

emits: ['click'],

setup(props, { emit }) {
  props = reactive(props);

  let dropdown = document.getElementsByClassName("dropdown-btn");


  onMounted(() => {
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    } 
  })

  return {
    buttonColor: computed(() => ({
      "--default": props.color === "default",
      "-primary": props.color === "primary",
      "-info": props.color === "info",
      "-success": props.color === "success",
      "-warning": props.color === "warning",
      "-error": props.color === "error",
      "disabled": props.disabled,
    })),

    buttonVariant: computed(() => ({
      "dui-button": true,
      "-default": props.variant === "default",
      "-raised": props.variant === "raised",
      "-outlined": props.variant === "outlined",
      "-text": props.variant === "text",
      "-squared": props.variant === "squared",
    })),

    buttonSize: computed(() => ({
      "-small": props.size === "small",
      "-medium": props.size === "medium",
      "-large": props.size === "large",
    })),

    isLoading: computed(() => props.loading ? "spinner-border" : false),

    dropdown,

    onClick() {
      emit('click');
    }
  }
},
};
</script>
  