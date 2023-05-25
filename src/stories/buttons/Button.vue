<template>
  <button :disabled="disabled" type="button" :class="[buttonVariant, buttonColor, buttonSize]" @click="onClick">
    <span :class="isLoading"></span>
    {{ label }}
  </button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'MuiButton',

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
        "mui-button": true,
        "-default": props.variant === "default",
        "-raised": props.variant === "raised",
        "-outlined": props.variant === "outlined",
        "-text": props.variant === "text",
        "-squared": props.variant === "squared",
        "-icon-only": props.variant === "icon-only",
      })),

      buttonSize: computed(() => ({
        "-small": props.size === "small",
        "-medium": props.size === "medium",
        "-large": props.size === "large",
      })),

      isLoading: computed(() => props.loading ? "spinner-border" : false),

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
