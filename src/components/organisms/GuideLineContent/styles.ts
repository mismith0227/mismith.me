import styled from '@emotion/styled'
import { GuideLinesNavigation } from '../../molecules/GuideLinesNavigation'

export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 64px;
`

export const StyledGuideLinesNavigation = styled(GuideLinesNavigation)`
  margin: 0 48px 0 0;
`

export const Inner = styled.div`
  display: flex;
  margin: 180px 0 0;
`

export const Content = styled.div`
  flex: 1;
`

export const Article = styled.article``

export const ArticleTitle = styled.h1`
  margin: 0;
  font-size: 32px;
`

export const ArticleBody = styled.div`
  h2 {
    margin: 64px 0 0;
  }

  pre {
    border-radius: 4px;
    background: #000;
    color: #fff;
    padding: 16px;
  }

  p,
  li {
    code {
      background: #000;
      color: #fff;
      padding: 2px 8px;
    }
  }

  table {
    th {
      background: #ccc;
      font-weight: normal;
    }
    td {
      padding: 4px 8px;
      border: 1px solid #eee;
    }
  }
`
