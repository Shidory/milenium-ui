<template>
  <span :class="[badgeColor]">3</span>
  <!-- <button :disabled="disabled" type="button" :class="[buttonVariant, buttonColor, buttonSize]" @click="onClick">
    <span :class="isLoading"></span>
    {{ label }}
  </button> -->
</template>

<script>
import './badge.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'MuiBadge',

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
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      badgeColor: computed(() => ({
        "mui-badge": true,
        "--default": props.color === "default",
        "-primary": props.color === "primary",
        "-info": props.color === "info",
        "-success": props.color === "success",
        "-warning": props.color === "warning",
        "-error": props.color === "error",
      })),

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
