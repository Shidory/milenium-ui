<template>
  <div>
    <hr role="separator" :class="dividerVariant">
  </div>
</template>

<script>
  import './divider.scss';
  import {computed, reactive} from "vue";

  export default {
    name: 'MuiDivider',
    props: {
      variant: {
        type: String,
      },
    },
    setup(props, { emit }) {
      props = reactive(props);
      return {
        dividerVariant: computed(() => ({
          "mui-a-divider": true,
          "-primary": props.variant === "primary",
          "-secondary": props.variant === "secondary",
        })),
      }
    },
  }
</script>
