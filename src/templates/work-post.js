import React from 'react'
import { graphql } from 'gatsby'
import Meta from '~/components/parts/Meta'
import Img from 'gatsby-image'
import Layout from '~/components/Layout'
import {
  Wrap,
  ImageWrap,
  Content,
  PostTitle,
  Date,
  PostContent,
} from './styles'

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const post = props.data.contentfulBlogPost
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location}>
      <Wrap>
        <Meta
          pageTitle={`${post.title}の詳細`}
          pageDescription={`${post.title}を制作しました`}
          pageLocation={props.location.href}
        />
        <ImageWrap>
          <Img alt={post.title} fluid={post.heroImage.fluid} />
        </ImageWrap>
        <Content>
          <PostTitle>{post.title}</PostTitle>
          <Date>{post.publishDate}</Date>
          <PostContent
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Content>
      </Wrap>
    </Layout>
  )
}

export default BlogPostTemplate
