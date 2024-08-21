<script setup lang="ts">
import CommentsComponent from '../Post/Comments/Comments.component.vue';
import PostInfoComponent from '../Post/PostInfo/PostInfo.component.vue';
import PostTagsComponent from '../Post/PostTags/PostTags.component.vue';

defineProps({
    id: {
        type: Number,
        required: true
    },
    title: String,
    content: String,
    comments: Array<any>,
    tags: Array<any>,
    image: String,
    dateCreated: Date,
});
</script>


<template>
    <div class="max-w-[630px] h-[667px] b-1 border-[1px] border-gray-300 p-[15px] rounded-xl fixed 
    z-[1] bg-white top-[0px] overflow-auto overflow-y-scroll m-y-[40px] top-[62px]" id="modal-window">
        <div class="w-full flex items-start justify-between">
            <h1 class="text-[22px] leading-[22px] tracking-[-1%] font-semibold mr-4">{{ title }}</h1>
            <img @click="$emit('callback')" class="size-5 cursor-pointer" src="/src/assets/cross.png"/>
        </div>
        <PostInfoComponent :comments="comments" :dateCreated="dateCreated"/>
        <img :src="`/src/assets/images/${image}`" class="filter-none"/>
        <p class="mt-[15px] text-base font-medium leading-[25px]">{{ content }}</p>
        <PostTagsComponent :tags="tags"/>
        <CommentsComponent :id="id" :comments="comments"/>
    </div>
</template>


<style scoped lang="sass">
@media only screen and (max-width: 375px)
    #modal-window
        top: 0px
        border-radius: 0px
        border: none
</style>