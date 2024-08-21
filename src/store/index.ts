import { defineStore } from "pinia";

interface MenuInterface {
    id: number,
    name: string
    showName: string
}

interface TagsInterface {
    id: number
    name: string
    active: boolean
}

interface StoreInterface {
    controlPanel: boolean
    inputValue: string
    posts: PostInterface[]
    tags: TagsInterface[]
    menu: MenuInterface[]
}

interface PostTagInterface {
    id: number
    name: string
}

interface PostCommentInterface {
    id: number
    author: string
    dateCreated: Date
    text: string
    avatar: string
}

interface PostInterface {
    id: number,
    title: string
    content: string
    image: string
    dateCreated: Date
    tags: PostTagInterface[]
    comments: PostCommentInterface[]
}

export const useStore = defineStore('storeId', {
    state: (): StoreInterface => {
        let controlPanel = false;
        let inputValue = '';
        const posts = [
          {id: 1, title: 'Вдохновение в каждом шаге', content: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image1.png', dateCreated: new Date("03/27/2017 12:00"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Люди'}], comments: []},
          {id: 2, title: 'Моменты тишины и покоя', content: 'В такие моменты наши фотографы ощущают гармонию и умиротворение. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image2.png', dateCreated: new Date("06/12/2024 16:40"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Животные'}], comments: []},
          {id: 3, title: 'Цвета природы в наших руках', content: 'Наши художники выражают всю красоту окружающего мира через творчество. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image3.png', dateCreated: new Date("05/12/2016 12:40"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Искусство'}], comments: []},
          {id: 4, title: 'Семейные узы в дикой природе', content: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image4.png', dateCreated: new Date("22/01/2017 14:14"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Животные'}], comments: []},
          {id: 5, title: 'Гармония городских и природных пейзажей', content: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image5.png', dateCreated: new Date("23/10/2013 06:12"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Искусство'}], comments: []},
          {id: 6, title: 'Моменты, которые остаются в сердце', content: 'Эти мгновения наполняют наши сердца радостью и любовью. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.', image: 'image6.png', dateCreated: new Date("27/03/2019 14:57"), tags: [{id: 1, name: 'Природа'}, {id: 2, name: 'Люди'}, {id: 3, name: 'Животные'}], comments: []},     
        ];
        const tags = [
            {id: 1, name: 'Город', active: false},
            {id: 2, name: 'Природа', active: false},
            {id: 3, name: 'Люди', active: false},
            {id: 4, name: 'Животные', active: false},
            {id: 5, name: 'Еда', active: false},
            {id: 6, name: 'Напитки', active: false},
            {id: 7, name: 'Архитектура', active: false},
            {id: 8, name: 'Искусство', active: false},

        ];
        const menu = [
            {id: 1, name: '', showName: 'Главная'},
            {id: 2, name: 'blog', showName: 'Блог'}
        ]
        return {
            controlPanel,
            inputValue,
            posts,
            tags,
            menu
        }
    },
    getters: {
        getActiveTags(state): boolean {
            const result = state.tags.find(el => el.active)
            if(result) {
                return true
            }
            return false
        },

        resetTags(state) {
            state.tags.forEach(el => {
                if(el.active) {
                    el.active = false
                }
            })
        },

        getTags(state) {
            return state.tags.filter(tag => tag.active === true)
        },


        getFilteredPosts(state) {
            const result: any = [];
            const filteredPost = state.posts.filter(post => post.title.toLocaleLowerCase().includes(state.inputValue));
            if(!state.tags.find(el => el.active === true)) {
                return filteredPost
            } else {
                for(let post of filteredPost) {
                    let count = 0;
                    for(let tag of this.getTags) {
                        if(post.tags.find(el => el.name === tag.name)) {
                            ++count
                        }
                    }
                    if(count === this.getTags.length) {
                        result.push(post)
                    }
                }
            }
            return result;
        },

        getPostComments(state) {
            return (id: number) => {state.posts.find(el => el.id === id)}
        }
    },
    actions: {
        changeTagStatus(name: string) {
            this.tags.forEach(tag => {
                if(tag.name === name) {
                    tag.active = !tag.active
                }
            })
        },
        createComment(id: number | undefined, text: string) {
            const post = this.posts.find(el => el.id === id);
            if(post) {
                const newComment = {id: Math.floor(Math.random()*10000000), text, dateCreated: new Date(), author: 'Рубен Саакян', avatar: 'ruben'};
                post.comments.push(newComment);
            }
        },
    }
})