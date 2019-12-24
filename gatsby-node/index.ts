const path = require('path')
import { GatsbyNode } from 'gatsby'
import {
  ContentfulBlogPostConnection,
  ContentfulBlogPost,
} from '../types/graphql-types'

// GraphQLにより取得されるデータの型
type Result = {
  allContentfulBlogPost: ContentfulBlogPostConnection
}

// テンプレートファイルに渡すデータの型
export type PostContext = {
  post: ContentfulBlogPost
}

export const createPages: GatsbyNode['createPages'] = ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/work-post.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/work/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
