<template>
  <div class="mui-m-drawer__aside -right -shadow">
    <div class="mui-m-drawer__aside__closeButton">
      <MuiButton label="X" variant="icon-only" size="medium" color="default" />
    </div>
    <div class="mui-o-sideSheet__content"></div>
  </div>
</template>

<script>
import './drawer.scss';
import MuiButton from '../buttons/Button.vue'
import { reactive } from 'vue';

export default {
  name: 'MuiDrawer',
  components: {
    MuiButton
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
