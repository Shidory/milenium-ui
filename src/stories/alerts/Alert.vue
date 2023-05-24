<template>
  <div :class="alertColor">
    <p>{{ label }}</p>
    <button class="mui-a-button" @click="onClose">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import './alert.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'MuiAlert',

  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      alertColor: computed(() => ({
        'mui-alert': true,
        "-success": props.color === "success",
        "-warning": props.color === "warning",
        "-error": props.color === "error",
      })),

      onClose() {
        emit('click');
      }
    }
  },
};
</script>
