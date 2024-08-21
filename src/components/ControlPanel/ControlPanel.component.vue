<script setup lang="ts">
import FilterBtnComponent from './filter/FilterBtn.component.vue';
import InputComponent from './Input/Input.component.vue';
import { useStore } from '../../store';
import TagsListComponent from './TagsList/TagsList.component.vue';

const store = useStore();
</script>


<template>
    <section class="control-panel">
        <h2 class="text-[32px] font-bold">Блог</h2>
        <div class="w-full" id="input-section">
            <InputComponent />
        </div>
        <FilterBtnComponent />
    </section>
    <section class="control-panel-phone">
        <h2 class="text-[32px] font-bold">Блог</h2>
        <FilterBtnComponent />
        <div class="w-full" id="input-section">
            <InputComponent />
        </div>
    </section>
    <section class="tags-section"
    :style="store.controlPanel ? 'min-height: 80px' : 'height: 0px'">
        <TagsListComponent v-if="store.controlPanel"/>
    </section>
</template>


<style scoped lang="sass">
@use "../../variablesStyle" as v
.control-panel-phone
    display: none
.control-panel
    margin: 0px auto
    max-width: 1400px
    min-height: 80px
    background-color: v.$background-color-third
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0px 95px
    gap: 20px
.tags-section
    margin: 0px auto
    max-width: 1400px
    background-color: v.$background-color-third
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
@media only screen and (max-width: 800px)
    .control-panel
        padding: 0px 30px
@media only screen and (max-width: 720px)
    .control-panel
        display: none
    .control-panel-phone
        background-color: v.$background-color-third
        padding: 10px
        display: flex
        align-items: center
        justify-content: space-between
        flex-wrap: wrap
        gap: 10px
        #input-section
            display: flex
            align-items: center
            justify-content: center
</style>