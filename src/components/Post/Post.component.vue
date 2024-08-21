<script setup lang="ts">
import { computed, ref } from 'vue';
import ModalWindowComponent from '../ModalWindow/ModalWindow.component.vue';
import PostInfoComponent from './PostInfo/PostInfo.component.vue';
import PostTagsComponent from './PostTags/PostTags.component.vue';

const openModalWindow = ref<boolean>(false);

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    title: String,
    content: String,
    tags: Array<any>,
    comments: Array<any>,
    image: String,
    dateCreated: Date
});

const shortContent = computed(() => {
    return props.content?.split('.')[0] + '.'
})
</script>


<template>
    <ModalWindowComponent v-show="openModalWindow" :title="title" :content="content" :tags="tags" :id="id" 
    :comments="comments" :dateCreated="dateCreated" :image="image"
    v-on:callback="() => openModalWindow = false"/>
    <div class="w-[400px] min-h-[408px] rounded-xl tabletX:w-[365px] tabletX:min-h-[378px]">
        <img @click="() => {openModalWindow = true}" class="cursor-pointer filter-none" :src="`/src/assets/images/${image}`" />
        <PostInfoComponent :comments="comments" :dateCreated="dateCreated"/>
        <h1 class="text-[22px] leading-[22px] tracking-[-1%] font-semibold">{{ props.title }}</h1>
        <p class="mt-2.5 text-base leading-[25px] font-medium">{{ shortContent }}</p>
        <PostTagsComponent :tags="props.tags" />
    </div>
</template>


<style scoped lang="sass">
</style>