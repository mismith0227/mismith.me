import styled from '@emotion/styled'
import media from '@/styles/media'

export const Container = styled.article`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const Date = styled.p`
  margin: 0;
  font-weight: bold;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 64px;

  ${media.small} {
    font-size: 24px;
  }
`

export const MainVisualWrap = styled.div`
  margin: 32px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #eee;

  ${media.small} {
    height: 250px;
  }
`

export const MainVisual = styled.img`
  max-height: 80%;
  max-width: 90%;
`

export const Body = styled.div`
  margin: 120px auto 0;
  max-width: 600px;

  ${media.small} {
    margin: 40px auto 0;
  }

  p {
    margin: 16px 0;
    word-wrap: break-word;
  }
`
