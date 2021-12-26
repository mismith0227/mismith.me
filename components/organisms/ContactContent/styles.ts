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

export const Title = styled.h1`
  margin: 0;
  font-size: 64px;
`

export const Text = styled.p``

export const Content = styled.div`
  margin: 180px auto 0;
  max-width: 800px;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const Email = styled.p``

export const SnsList = styled.ul`
  display: flex;
  margin: 32px 0 0;
  padding: 0;
  gap: 16px;
  list-style: none;
`

export const SnsItem = styled.li``

export const ExternalLink = styled.a`
  color: #000;
`
