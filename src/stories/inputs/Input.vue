<template>
  <div style="background: rgb(238, 238, 238); padding: 3em;">
    <form style="padding: 0px 3em;">
      Placeholder:
      <div class="mui-a-input" :class="disabled"><!---->
        <div class="mui-a-input__inputContainer">
          <input type="password" placeholder="Placeholder" class="mui-a-input__input test" ref="input" :disabled="isDisabled">
        </div> <!---->
      </div>
<!--      With value: <div class="eui-a-input -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Disabled: <div class="eui-a-input -disabled -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" disabled="disabled" placeholder="disabled" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Valid: <div class="eui-a-input -valid -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" placeholder="Valid" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Valid disabled: <div class="eui-a-input -valid -disabled -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" disabled="disabled" placeholder="Valid" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Warning: <div class="eui-a-input -warning -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" placeholder="Warning" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Warning disabled: <div class="eui-a-input -warning -disabled -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" disabled="disabled" placeholder="Warning" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Invalid: <div class="eui-a-input -invalid -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" placeholder="Invalid" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Invalid disabled: <div class="eui-a-input -invalid -disabled -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" disabled="disabled" placeholder="Invalid" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>adaptSize: <div class="eui-a-input -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" adaptsize="" placeholder="adaptSize" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>v-model: <div style="display: flex;"><div class="eui-a-input -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" placeholder="Votre recherche" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>Value v-model</div>Required: <div class="eui-a-input -text">&lt;!&ndash;&ndash;&gt;-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" required="required" placeholder="required" class="eui-a-input__input">-->
<!--      </div> &lt;!&ndash;&ndash;&gt;</div>-->
<!--      <button type="submit">Submit</button><br>TrailingTextButton:-->
<!--      <div class="eui-a-input -text">-->
<!--        <div class="eui-a-input__startEnhancer">@</div>-->
<!--        <div class="eui-a-input__inputContainer">-->
<!--          <input type="text" placeholder="text button" class="eui-a-input__input">-->
<!--        </div>-->
<!--        <div class="eui-a-input__endEnhancer">-->
<!--          <button class="eui-a-button -text -primary">Ajouter</button>-->
<!--        </div></div>TrailingIconButton: <div class="eui-a-input -text">-->
<!--      <div class="eui-a-input__startEnhancer">€</div>-->
<!--      <div class="eui-a-input__inputContainer">-->
<!--        <input type="text" placeholder="icon button" class="eui-a-input__input">-->
<!--      </div> <div class="eui-a-input__endEnhancer">-->
<!--      <button class="eui-a-button -text -primary -iconOnly"><i class="eui-a-icon-home"></i></button>-->
<!--    </div>-->
<!--    </div>-->
    </form>
  </div>
</template>

<script>
  import './input.scss';
  import { onMounted, ref, computed } from 'vue';

  export default {
  name: 'MuiInput',
  props: {
    disabled: {
      type: Boolean,
    }
  },

  setup(props) {
    const input = ref(null);

    const disabled = computed(() => ({
      "-disabled": props.disabled === true
    }));

    const isDisabled = computed(() => props.disabled);

    onMounted(() => {
      input.value.addEventListener("focus", function() {
        const div = input.value.parentElement;
        div.parentElement.classList.add('-focus');
      });

      input.value.addEventListener("blur", function() {
        const div = input.value.parentElement;
        div.parentElement.classList.remove('-focus');
      });
    });

    return {
      input,
      disabled,
      isDisabled
    }
  },
};
</script>
