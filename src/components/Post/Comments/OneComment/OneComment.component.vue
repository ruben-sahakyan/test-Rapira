<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    text: String,
    author: String,
    dateCreated: Date
});

const date = computed(() => {
    const year = props.dateCreated?.getFullYear();
    const monts = Number(props.dateCreated?.getMonth()) < 10 ?
    `0${props.dateCreated?.getMonth()}` 
    : 
    props.dateCreated?.getMonth();
    const day = props.dateCreated?.getUTCDate();
    const hour = props.dateCreated?.getHours();
    const minutes = props.dateCreated?.getMinutes();
    return `${day}.${monts}.${year} в ${hour}:${minutes}`
});
</script>


<template>
    <div class="max-w-[620px] min-h-[66px] mt-3 p-3 pb-[0px] flex gap-3" id="one-component">
        <img class="size-[38px]" src="/src/assets/user.png"/>
        <div id="one-component-text" class="max-w-[600px]">
            <p class="text-base font-semibold leading-4 text-gray-900">{{ author }}</p>
            <p id="comment-text" class="text-sm text-gray-800 leading-[14px] my-1.5 font-medium">{{ text }}</p>
            <p class="text-gray-500 font-medium text-xs">{{ date }}</p>
        </div>
    </div>
</template>


<style scoped lang="sass">
#one-component-text
    overflow-wrap: break-word
    #comment-text
        text-wrap: wrap
</style>