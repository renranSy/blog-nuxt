type Tag = {
  name: string;
  count: number;
}
export const useTagStore = defineStore('tag', {
  state: () => ({
    allTags: [] as Tag[]
  }),
  hydrate(storeState) {
    storeState.allTags = [] as Tag[]
  },
  actions: {
    async init() {
      const { data } = await useAsyncData('get-all-post', () => queryContent('/posts').sort({ _id: -1 }).find())
      data.value?.forEach((post) => {
        const tags: Array<string> = post.tags || []
        tags.forEach((tag) => {
          const names = this.allTags.map((item: Tag) => item.name)
          if (names.includes(tag)) {
            this.allTags.find((item: Tag) => item.name === tag)!.count++
          } else {
            this.allTags.push({
              name: tag,
              count: 1
            })
          }
        })
      })
    }
  }
})