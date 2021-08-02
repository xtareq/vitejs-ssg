<template>
  <div>
    <h3>
      Theme : {{theme}}

    </h3>
    <router-link to="/about">About</router-link>
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