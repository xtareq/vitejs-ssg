<template>
    <h3>{{route.params.id}}</h3>
</template>

<script setup="props">
import { useRoute } from "vue-router";

const route = useRoute()

</script>