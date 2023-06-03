<template>
  <h3 class="mui-a-heading -h3 -bold">
    H3 - 18px line height 22px - Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis
  </h3>
</template>

<script>
  import './heading.scss';
  import {computed, reactive} from "vue";

  export default {
    name: 'MuiHeading',
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
