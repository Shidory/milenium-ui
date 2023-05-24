<template>
  <div :class=loading>
    <span class="mui-loader--ball"></span>
    <span class="mui-loader--ball"></span>
    <span class="mui-loader--ball"></span>
  </div>
</template>

<script>
  import './loader.scss';
  import { computed, reactive } from "vue";

  export default {
    name: 'MuiLoader',
    props: {
      isLoading: {
        type: Boolean,
      },
    },

    setup(props) {
      props = reactive(props);
      return {
        loading: computed(() => props.isLoading ? 'mui-loader' : false),
      }
    },
  };
</script>
