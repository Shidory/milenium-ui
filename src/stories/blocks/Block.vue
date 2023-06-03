<template>
  <MuiCard class="mui-m-block">
    <header class="mui-m-block__header">
      <h3 class="mui-a-heading mui-m-block__title -h3 -bold">
        Titre IHM
      </h3>
      <MuiButton v-if="variant === 'action'" label="Action"
                 variant="text" color="default" size="medium" @click="onClick" />
    </header>
    <MuiDivider variant="secondary" class="mui-m-block__divider" />
    <div class="mui-m-block__body">
      Content
    </div>
  </MuiCard>
</template>

<script>
import './block.scss';
import MuiCard from '../cards/Card.vue';
import MuiDivider from '../dividers/Divider.vue';
import MuiButton from '../buttons/Button.vue';

export default {
  name: 'MuiBlock',
  components: {
    MuiCard,
    MuiDivider,
    MuiButton
  },
  props: {
    variant: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    return {
      onClick() {
        emit('click');
      }
    }
  },
  };
</script>
