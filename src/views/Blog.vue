<script setup lang="ts">
import { useStore } from '../store';
import ControlPanelComponent from '../components/ControlPanel/ControlPanel.component.vue';
import PostComponent from '../components/Post/Post.component.vue';
import EmptyListComponent from '../components/EmptyList/EmptyList.component.vue';
const store = useStore();

</script>


<template>
    <ControlPanelComponent />
    <div class="wall">
        <div class="posts-list">
            <template v-if="store.getFilteredPosts.length">
                <PostComponent v-for="post of store.getFilteredPosts" key="post.id" :id="post.id" :image="post.image"
                :title="post.title" :content="post.content" :tags="post.tags" :comments="post.comments" :dateCreated="post.dateCreated"
                />
            </template>

            <template v-else>
                <EmptyListComponent />
            </template>

        </div>
    </div>
</template>



<style scoped lang="sass">
@use "../variablesStyle" as v
.wall
    width: 100%
    min-height: 100vh
    padding: 10px 0px 30px 0px
    background-color: v.$background-color-second
    .posts-list
        background-color: v.$background-color-third
        margin: 0px auto
        max-width: 1300px
        padding: 30px 10px
        border-radius: 12px
        display: flex
        align-items: start
        justify-content: center
        gap: 20px
        flex-wrap: wrap
@media only screen and (max-width: 800px)
    .wall
        .posts-list
            padding: 10px
            gap: 10px
</style>