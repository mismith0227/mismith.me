import removeMd from 'remove-markdown'
import algoliasearch from 'algoliasearch'
import { getAllContents } from '@/libs/getAllContents'
import { Blog } from '@/types/Blog'

const applicationId = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID ?? ''
const adminApiKey = process.env.ALGOLIA_ADMIN_API_KEY ?? ''

export const generateIndex = async (): Promise<void> => {
  const posts = await getAllContents()

  const objects = posts.map((post: Blog) => {
    return {
      objectID: post.id,
      url: `https://www.mismith.me/blog/${post.category.id}/${post.id}`,
      title: post.title,
      description: post.description,
      content: removeMd(post.content),
    }
  })

  const client = algoliasearch(applicationId, adminApiKey)
  const index = client.initIndex('mismith')
  process.env.NODE_ENV === 'production' &&
    (await index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true }))
}
