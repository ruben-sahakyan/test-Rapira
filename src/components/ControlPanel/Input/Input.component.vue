<script setup lang="ts">
import { useStore } from '../../../store';

const store = useStore();
</script>


<template>
    <div class="flex items-center justify-between w-[400px] h-[40px] rounded-md px-2.5"
    :style="store.inputValue ? 'border: 1px solid #3e97ff; box-shadow: 0px 0px 0px 2px rgba(62, 151, 255, 0.32)' : ''">
        <img class="size-3.5" src="../../../assets/magnifier.png"/>
        <input v-model="store.inputValue"
        class="outline-none bg-transparent placeholder-gray-400 text-sm w-full ml-2.5" 
        placeholder="Поиск"/>
        <img @click="() => store.inputValue = ''" v-show="store.inputValue" class="size-4 cursor-pointer" src="../../../assets/cross.png"/>
    </div>
</template>


<style scoped lang="sass">
@use '../../../variablesStyle' as v
div
    background-color: v.$background-color-input
    border: 1px solid v.$background-color-input
    &:hover
        border: 1px solid v.$border-color-hover
    &:active
        box-shadow: 0px 0px 0px 2px rgba(62, 151, 255, 0.32)
</style>