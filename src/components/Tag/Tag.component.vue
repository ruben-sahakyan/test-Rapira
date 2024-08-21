<script setup lang="ts">
import { useStore } from '../../store';

const store = useStore();

const props = defineProps({
    name: { type: String, required: true },
    status: { type: Boolean, required: true }
});
</script>


<template>
    <div :id="`${props.status ? 'active-tag' : ''}`" @click="() => {
        store.changeTagStatus(name);
        store.getFilteredPosts;
    }" :class="`${props.status ? 'bg-blue-500' : 'bg-blue-50 hover:bg-[#3e97ff33]'} h-7 px-3 flex items-center gap-1.5 rounded-2xl cursor-pointer`">
    <p :class="`text-base ${props.status ? 'text-white' : 'text-blue-500'}`">{{ props.name }}</p>
    <div v-if="props.status" id="active-tag-icons" class="size-5
    ">
        <img id="icon-1" src="/src/assets/check.png" class="size-5"
        style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(152deg) brightness(103%) contrast(103%)"/>
        <img id="icon-2" src="/src/assets/cross.png" class="size-5"
        style="filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(152deg) brightness(103%) contrast(103%)"/>
    </div>
    <img v-else src="/src/assets/plus.png" class="size-5"
    style="filter: brightness(0) saturate(100%) invert(66%) sepia(69%) saturate(6877%) hue-rotate(197deg) brightness(98%) contrast(91%)"/>
    </div>

</template>


<style scoped lang="sass">
#active-tag
    #active-tag-icons
        position: relative
        img
            position: absolute
        #icon-1
            opacity: 1
        #icon-2
            opacity: 0
    &:hover #active-tag-icons #icon-1
        opacity: 0
    &:hover #active-tag-icons #icon-2
        opacity: 1
</style>