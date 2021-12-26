import styled from '@emotion/styled'
import media from '@/styles/media'

export const Container = styled.article`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;
  min-height: 30vh;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 64px;
`
