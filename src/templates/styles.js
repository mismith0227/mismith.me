import styled from 'styled-components'
import media from '~/styles/media'

export const Wrap = styled.div`
  max-width: 800px;
  width: 96%;
  margin: 120px auto;

  ${media.large} {
    margin: 80px auto;
  }

  ${media.small} {
    margin: 40px auto;
  }
`

export const ImageWrap = styled.div`
  height: 400px;
  border: 1px solid #ccc;

  .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Content = styled.div``

export const PostTitle = styled.h2`
  font-size: 40px;
  margin: 24px 0 0;

  ${media.large} {
    font-size: 32px;
  }

  ${media.small} {
    font-size: 24px;
  }
`

export const Date = styled.div``

export const PostContent = styled.div`
  margin: 40px auto 0;
  h3 {
    font-size: 24px;
  }
`
