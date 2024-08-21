<script setup lang="ts">
import TagComponent from '../../Tag/Tag.component.vue';
import { useStore } from '../../../store';

const store = useStore();
</script>


<template>
    <section class="w-full flex items-center justify-start gap-2 flex-wrap">
        <TagComponent v-for="tag of store.tags" :key="tag.id" :name="tag.name" :status="tag.active"/>
    </section>
</template>


<style scoped lang="sass">
section
    padding: 10px 94px
@media only screen and (max-width: 800px)
    section
        padding: 10px 30px
@media only screen and (max-width: 720px)
    section
        padding: 10px 10px
</style>