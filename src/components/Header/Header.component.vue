<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoComponent from './Logo/Logo.component.vue';
import { useMonitorSize } from '../../composables/monitor-size';
import { useStore } from '../../store';
import { ref, watch } from 'vue';
const burgerMenuOpen = ref<boolean>(false);
const store = useStore();

const width = useMonitorSize();

watch(width.browserWidth, (newSize, oldSize) => {
    if(newSize > oldSize) {
        burgerMenuOpen.value = false;
    }
});
</script>


<template>
    <header :class="`${burgerMenuOpen ? 'h-[142px]' : 'h-[62px]'} max-w-[1400px] mx-auto bg-black`">
        <div class="flex items-center justify-start h-[62px] tablet:pl-[54px] pl-[15px] tablet:gap-[80px] gap-[15px]">

            <div @click="() => burgerMenuOpen = !burgerMenuOpen" class="block h-[19px] w-[24px] tablet:hidden cursor-pointer relative">
                <div :class="`w-full h-[3px] bg-white rounded-[1.5px]
                before:w-6 before:h-[3px] before:bg-white before:opacity-30 before:rounded-[1.5px] before:absolute before:top-[43%]
                ${burgerMenuOpen ? 'after:opacity-100 bg-opacity-30' : ''}
                after:w-6 after:h-[3px] after:bg-white after:opacity-30 after:rounded-[1.5px] after:absolute after:bottom-[0px]`">
                </div>
            </div>

            <LogoComponent />

            <ul class="flex items-center gap-[20px] hidden tablet:flex">
                <li v-for="menuItem of store.menu">
                    <RouterLink class="text-white h-8 py-2 px-3.5 flex items-center justify-center rounded-md
                    text-base font-semibold leading-4 hover:text-text-color-third"
                    activeClass="bg-white bg-opacity-10 text-[#3e97ff]" 
                    :to="`/${menuItem.name}`">{{ menuItem.showName }}</RouterLink>
                </li>
            </ul>
        </div>
        <ul v-show="burgerMenuOpen" class="w-full h-full border-t-[1px] border-gray-500">
            <li @click="() => {burgerMenuOpen = false}" class="w-full h-[40px] text-white flex items-center justify-center" v-for="burgerMenuItem of store.menu">
                <RouterLink class="flex items-center justify-center w-full h-[40px]
                hover:bg-white hover:bg-opacity-10 hover:text-text-color-third" 
                :to="`/${burgerMenuItem.name}`">{{ burgerMenuItem.showName }}</RouterLink>
            </li>
        </ul>
    </header>
</template>

<style scoped lang="sass">
</style>