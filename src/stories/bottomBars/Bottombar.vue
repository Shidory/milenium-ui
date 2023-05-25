<template>
  <div class="mui-m-bottom-bar">
    <MuiButton label="Annnuler" variant="text" size="medium" color="default" />
    <MuiButton label="Enregistrer" variant="raised" size="medium" color="primary" />
  </div>
</template>

<script>
import './bottombar.scss';
import MuiButton from '../buttons/Button.vue'
import { reactive, computed } from 'vue';

export default {
  name: 'MuiBottomBar',
  components: {
    MuiButton
  },
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

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
