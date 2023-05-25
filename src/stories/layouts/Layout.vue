<template>
  <div class="mui-o-layout">
    <header class="header"></header>
    <nav class="side-bar"></nav>
    <main class="main-content"></main>
  </div>
</template>

<script>
import './layout.scss';

export default {
  name: 'MuiLayout',

  emits: ['click'],

  setup({ emit }) {
    return {
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
