import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event).find()
  return posts.map(item => {
    return {
      loc: item._path,
      lastmod: new Date()
    }
  })
})