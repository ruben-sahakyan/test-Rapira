<script setup lang="ts">
const props = defineProps({
    tags: Array<{id: number, name: string}>
})
</script>


<template>
    <ul class="w-full flex items-center justify-start gap-2.5 mt-2.5 flex-wrap">
        <li class="bg-tag-bg-color text-tag-text-color py-1.5 px-3.5 rounded-full" v-for="tag of props.tags" :key="tag.id">{{ tag.name }}</li>
    </ul>
</template>


<style scoped lang="sass"></style>