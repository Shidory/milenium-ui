<template>
  <div class="mui-m-modal">
    <MuiOverlay />
    <div class="mui-a-card mui-m-modal__container" :class="modalSize">
      <div class="mui-m-modal__header">
        <div class="mui-m-modal__header__title">
          Nom de la modal
        </div>
        <MuiButton label="X" variant="icon-only" size="medium" color="default" />
      </div>
      <div class="mui-m-modal__content">
        Contenu de la modal
      </div>
      <div class="mui-m-modal__footer">
        <MuiButton label="Annnuler" variant="default" size="medium" color="default" />
        <MuiButton label="Confirmer" variant="raised" size="medium" color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
import './modal.scss';
import '../cards/card.scss';
import MuiButton from '../buttons/Button.vue';
import MuiOverlay from '../overlays/Overlay.vue';
import { computed, reactive } from 'vue';

export default {
  name: 'MuiModal',
  props: {
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  components: {
    MuiButton,
    MuiOverlay
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      modalSize: computed(() => ({
        "-small": props.size === "small",
        "-medium": props.size === "medium",
        "-large": props.size === "large",
      })),

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
