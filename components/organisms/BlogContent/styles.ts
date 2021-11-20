import styled from '@emotion/styled'
import { Pagination } from '@/components/molecules/Pagination'
import { Categories } from '@/components/molecules/Categories'

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

export const BlogList = styled.ul`
  list-style: none;
  margin: 180px 0 0;
  padding: 0;
`

export const BlogListItem = styled.li`
  margin: 120px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

export const BlogTitle = styled.h3`
  margin: 16px 0 0;
  font-size: 36px;
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

export const StyledLink = styled.a`
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
`

export const StyledCategories = styled(Categories)`
  margin-top: 120px;
`
