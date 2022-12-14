import Link from 'next/link'
import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'
import { Pagination } from '@/components/molecules/Pagination'
import { Categories } from '@/components/molecules/Categories'
import { Tag } from '@/components/atoms/Tag'

export const StyledContainer = styled(Container)``

export const CategoryLabel = styled.span`
  display: inline-block;
  margin-left: 24px;
  font-size: 18px;

  ${media.small} {
    display: block;
    margin-left: 8px;
    font-size: 16px;
  }
`

export const BlogList = styled.ul`
  list-style: none;
  margin: 180px 0 0;
  padding: 0;

  ${media.small} {
    margin: 80px 0 0;
  }
`

export const BlogListItem = styled.li`
  margin: 120px 0 0;

  &:first-of-type {
    margin: 0;
  }

  ${media.small} {
    margin: 60px 0 0;
  }
`

export const BlogTitle = styled.h2`
  margin: 16px 0 0;
  font-size: 36px;

  ${media.small} {
    margin: 8px 0 0;
    font-size: 24px;
  }
`

export const StyledTag = styled(Tag)`
  ${media.small} {
    font-size: 10px;
  }
`

export const DateArea = styled.div`
  display: flex;

  ${media.small} {
    margin-top: 8px;
    flex-direction: column;
  }
`

export const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;

  ${media.small} {
    font-size: 10px;
  }
`

export const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #777;
    cursor: pointer;
  }
`

export const StyledPagination = styled(Pagination)`
  margin-top: 120px;

  ${media.small} {
    margin-top: 60px;
  }
`

export const StyledCategories = styled(Categories)`
  margin-top: 120px;

  ${media.small} {
    margin-top: 60px;
  }
`
