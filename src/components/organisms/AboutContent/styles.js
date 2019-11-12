import styled from 'styled-components'
import IconList from '../../molecules/IconList'

export const Wrap = styled.div``

export const Content = styled.div`
  max-width: 1024px;
  margin: 120px auto;
`

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
`

export const IconWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`

export const Name = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 80px;
  margin: 24px 0 0;
`

export const Section = styled.section`
  margin: 24px 0 0;
`

export const Title = styled.h3`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 64px;
  margin: 0;
`

export const Text = styled.p`
  margin: 16px 0 0;
`

export const List = styled.ul``

export const Item = styled.li``

export const TagList = styled.ul`
  margin: 24px 0 0;
  padding: 0;
`

export const TagItem = styled.li`
  display: inline-block;
  margin: 0 8px 0 0;

  &::after {
    content: '/';
    padding: 0 0 0 8px;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`

export const StyledIconList = styled(IconList)`
  margin: 24px 0 0;
`
