<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../../store';
const store = useStore();

const activeTags = computed((): any => {
    const result = store.tags.find(el => el.active)
    return result ? true : false
})
</script>


<template>
    <div v-if="!store.controlPanel" class="flex items-center cursor-pointer gap-1" @click="() => {store.controlPanel = true}">
        <p class="text-text-color-second">Фильтр</p>
        <img class="size-4 ml-l" src="/src/assets/down.png"/>
    </div>
    <div v-else-if="store.controlPanel && activeTags" class="flex items-center gap-2">
        <button @click="() => {store.resetTags}" class="text-blue-500 text-sm cursor-pointer">Очистить</button>
        <div class="flex items-center gap-1 cursor-pointer" @click="() => {store.controlPanel = false}">
            <p class="text-text-color-second">фильтр</p>
            <img class="size-4 ml-l flex items-center mt-0.5" src="/src/assets/up.png"/>
        </div>
    </div>
    <div v-else class="flex items-center cursor-pointer gap-1" @click="() => {store.controlPanel = false}">
        <p class="w-36 text-end text-text-color-second">Скрыть фильтр</p>
        <img class="size-4 ml-l flex mt-0.5" src="/src/assets/up.png"/>
    </div>
</template>



<style scoped lang="sass">
img
    filter: brightness(0) saturate(100%) invert(66%) sepia(9%) saturate(438%) hue-rotate(192deg) brightness(98%) contrast(95%)
</style>