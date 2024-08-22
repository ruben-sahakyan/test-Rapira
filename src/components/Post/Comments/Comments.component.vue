<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '../../../store';
import OneCommentComponent from './OneComment/OneComment.component.vue';

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    comments: Array<any>,
});

const store = useStore();

const commentText = ref<string>('');
const commentActive = ref<boolean>(false);

const countLetters = computed(() => {
    return commentText.value.length
});

const commentPublish = () => {
    if(commentText.value.trim() !== '' && commentText.value.length <= 250) {
        store.createComment(props.id, commentText.value);
        commentText.value = '';
        commentActive.value = false;
    }
};

const commentsCount = computed(() => {
    return props.comments?.length ? Number(props.comments.length) : 0
})
</script>


<template>
    <section class="w-full min-h-[100px] mt-2.5">
        <div class="w-full h-[16px] flex items-center gap-1.5">
            <h3 class="text-base font-semibold leading-4">Комментариев</h3>
            <p class="text-[#7e8299]">{{ commentsCount }}</p>
        </div>

        <div @click="() => commentActive = true" class="mt-2.5 mb-1 w-full min-h-[52px] rounded-md py-[10px] px-[15px]
        border border-color-first flex items-start" 
        :style="commentActive ? 
        commentText.length <= 250 ? 'height: 131px; border: 2px solid rgba(62, 151, 255, 1); box-shadow: 0px 0px 0px 2px rgba(62, 151, 255, 0.32)' 
        : 
        'height: 131px; border: 2px solid rgba(241, 65, 108, 1); box-shadow: 0px 0px 0px 2px rgba(241, 65, 108, 0.32)'
        : 
        ''
        ">
            <textarea class="w-full h-full resize-none outline-none text-sm placeholder:text-gray-400" v-model="commentText" placeholder="Введите комментарий"></textarea>
            <img v-show="countLetters" src="/src/assets/cross.png" class="block size-5 cursor-pointer"
            @click="() => commentText = ''"/>
        </div>

        <p class="text-xs text-text-color-first">
            <span :class="countLetters > 250 ? 'text-red-500' : ''">{{ countLetters }}</span> из 250 символов
        </p>

        <div class="w-full h-[38px] mt-2.5 flex items-center justify-end">
            <button @click="() => {commentActive = false; commentText = ''}" class="w-[120px] h-full bg-gray-300 rounded-md bg-background-color-first text-blue-600 text-[13px] font-bold leading-[14px]">Отмена</button>
            <button @click="commentPublish" :class="`w-[120px] h-full bg-blue-600 ml-2.5 rounded-md bg-blue-600 text-white text-[13px] font-bold leading-[14px]
            ${countLetters > 250 || countLetters <= 0 ?  'bg-gray-100 cursor-not-allowed text-gray-400' : ''}`">Опубликовать</button>
        </div>

        <OneCommentComponent v-for="comment of comments" 
        :text="comment.text" :dateCreated="comment.dateCreated" :author="comment.author"
        />
    </section>
</template>


<style scoped lang="sass">
</style>
