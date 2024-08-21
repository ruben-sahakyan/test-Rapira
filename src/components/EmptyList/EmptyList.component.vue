<script setup lang="ts"></script>


<template>
    <div class="w-full h-[282px] flex flex-col items-center justify-center gap-[8px]">
        <img class="size-[46px]" src="/src/assets/search-list.png" />
        <h2 class="text-center text-sm text-text-color-first">Поиск не дал результатов</h2>
        <p class="text-center max-w-[287px] text-xs text-text-color-second">Повторите поиск или используйте фильтр для структуризации контента</p>
    </div>
</template>


<style scoped lang="sass">
img
    filter: brightness(0) saturate(100%) invert(90%) sepia(9%) saturate(213%) hue-rotate(202deg) brightness(99%) contrast(86%)
</style>