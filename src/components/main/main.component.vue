<template>
  <div>
    <h1>Главная страница</h1>
    <hr/>
    <button @click="switchTheme">Сменить тему</button>
    <div>Тема {{theme}}</div>
  </div>
</template>

<script lang="ts">

import {ETheme} from "../../models/theme/theme.types";
import {useStore, useVModel} from "effector-vue/composition";
import {$theme, updateThemeEvent} from "../../models/theme/theme.store";

export default {
  name: 'Main',
  setup() {
    const theme = useVModel($theme);

    const switchTheme = () => {
      console.log(theme.value)
      updateThemeEvent(theme.value === ETheme.Dark ? ETheme.Light : ETheme.Dark);
    }

    return {
      switchTheme,
      theme,
    }
  }
}
</script>

<style scoped>

</style>