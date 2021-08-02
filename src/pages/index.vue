<template>
  <div>
    <h3>
      Theme : {{theme}}
    </h3>
  </div>
</template>

<script setup="props,{store}">
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'

let store = useStore()
let theme = computed(()=>store.getters.theme)

</script>

<style>

</style>