import styled from 'styled-components'
import media from '../styles/media'

export const Wrap = styled.div`
  margin: 12rem 0;

  ${media.large} {
    margin: 12rem 0;
  }

  ${media.small} {
    margin: 8rem 0;
  }
`

export const ImageWrap = styled.div`
  position: relative;
  width: 96%;
  max-width: 1200px;
  margin: 4rem auto 0;
  box-sizing: border-box;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .gatsby-image-wrapper {
    height: 100%;
    height: 0;
    padding-bottom: 42%;
  }
`

export const WorkMeta = styled.div`
  width: 96%;
  max-width: 1200px;
  margin: 4rem auto 0;
`

export const Content = styled.div`
  max-width: 80rem;
  width: 96%;

  margin: 4rem auto;

  ${media.large} {
    margin: 4rem auto;
  }

  ${media.small} {
    margin: 4rem auto;
  }
`

export const PostTitle = styled.h2`
  font-size: 2.4rem;
  margin: 0.8rem 0 0;
`

export const Date = styled.div`
  color: #7d7d7d;
`

export const PostContent = styled.div`
  margin: 4rem auto 0;
  h3 {
    font-size: 2.4rem;
  }
`
