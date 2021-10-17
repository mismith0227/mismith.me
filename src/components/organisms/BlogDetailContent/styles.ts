import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 48px;
`

export const Category = styled.span`
  display: inline-block;
  padding: 4px 16px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`

export const DateArea = styled.div`
  display: flex;
`

export const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;
`

export const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

export const Body = styled.div`
  margin: 180px auto 0;
  max-width: 640px;

  h2 {
    position: relative;
    margin: 84px 0 32px;
    font-size: 32px;

    &::before {
      content: '';
      display: block;
      width: 80px;
      height: 6px;
      background-color: #000;
      position: absolute;
      top: 26px;
      left: -96px;
    }
  }

  h3 {
    margin: 32px 0;
    font-size: 24px;
  }

  h4 {
    margin: 24px 0;
    font-size: 18px;
  }

  p {
    margin: 16px 0;

    code {
      background: #f5f5f5;
      font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
      background-color: rgba(135, 131, 120, 0.15);
      color: #eb5757;
      font-weight: bold;
      padding: 4px;
      font-size: 14px;
    }
  }

  pre {
    background: #f5f5f5;
    border: none;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    padding: 16px;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    background-color: rgb(247, 246, 243);
    color: slategray;
    font-weight: bold;
  }

  blockquote {
    padding: 16px;
    margin-left: 0;
    margin-right: 0;
    border-left: 2px solid #000;
  }
`
