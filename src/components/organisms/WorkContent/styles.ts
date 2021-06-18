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
  font-size: 64px;
`

export const ThumbnailWrap = styled.div`
  margin: 16px 0 0;
  height: 0;
  padding-bottom: 40%;
  overflow: hidden;
`

export const Thumbnail = styled.img`
  width: 100%;
  object-fit: cover;
`

export const Works = styled.ul`
  margin: 180px 0 0;
  padding: 0;
  list-style: none;
`

export const WorkItem = styled.li`
  margin: 120px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

export const Date = styled.p`
  margin: 0;
  font-size: 14px;
`

export const WorkTitle = styled.h3`
  margin: 0;
  font-size: 36px;
`

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

export const Description = styled.p`
  margin: 16px 0 0;
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  margin: 0 8px 0 0;
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`
