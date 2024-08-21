<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    comments: Array<any>,
    dateCreated: Date,
});

const commentsCount = computed(() => {
    return props.comments?.length
});

const day = computed(() => {
    return props.dateCreated?.getUTCDate();
})

const month = computed(() => {
    switch(props.dateCreated?.getMonth()) {
        case 1:
            return ' Янв'
            break
        case 2:
            return 'Фев'
            break
        case 3:
            return 'Мар'
            break
        case 4:
            return 'Апр'
            break
        case 5:
            return 'Май'
            break
        case 6:
            return 'Июн'
            break
        case 7:
            return 'Июл'
            break
        case 8:
            return 'Авг'
            break
        case 9:
            return 'Сен'
            break
        case 10:
            return 'Окт'
            break
        case 11:
            return 'Ноя'
            break
        case 12:
            return 'Дек'
            break
    }
})
</script>


<template>
    <div class="w-full h-[20px] my-2.5 flex items-center justify-start gap-2.5 text-sm text-text-color-first">
        <p>{{day }} {{ month }}</p>
        <img class="w-[4px] h-[4px]" src="/src/assets/dotIcon.png"/>
        <p>2 мин</p>
        <img class="w-[4px] h-[4px]" src="/src/assets/dotIcon.png"/>
        <img class="size-5" src="/src/assets/commentsIcon.png"/>
        <p>{{ commentsCount }} комментарий</p>
    </div>
</template>


<style scoped lang="sass"></style>