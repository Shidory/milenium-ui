<template>
  <div class="mui-modal">
    <div class="mui-card">
      <div class="mui-card-header">
        <p>Nom de la card</p>
        <MuiButton label="X" variant="icon-only" size="medium" color="default" />
      </div>
      <div class="mui-card-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum error ex ipsam natus nulla pariatur quos! Ab accusamus cumque deserunt esse itaque porro quia, quis ratione rem repellat soluta!
      </div>
      <div class="mui-card-footer">
        <MuiButton label="Annnuler" variant="default" size="medium" color="default" />
        <MuiButton label="Confirmer" variant="raised" size="medium" color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
import './modal.scss';
import MuiButton from '../buttons/Button.vue'
import { reactive } from 'vue';

export default {
  name: 'MuiModal',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
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
