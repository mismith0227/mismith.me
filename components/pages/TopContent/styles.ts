import Image from 'next/image'
import styled from '@emotion/styled'
import media from '@/styles/media'
import { IconList, IconListItem } from '@/components/molecules/IconList'

export const Wrap = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  &:not(:first-of-type) {
    margin-top: 40px;
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 0;
  gap: 0 8px;

  ${media.medium} {
    margin: 12px 0 0;
  }
`

type DotProps = {
  isCurrent: boolean
}

export const Dot = styled.button<DotProps>`
  width: 60px;
  height: 6px;
  border: none;
  background-color: ${({ isCurrent }) => (isCurrent ? '#000' : '#ddd')};

  &:hover {
    cursor: pointer;
  }

  ${media.medium} {
    width: 40px;
    height: 4px;
  }
`

export const Profile = styled.div`
  width: 96%;
  margin: 64px auto 0;
  text-align: center;
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p``

export const StyledIconList = styled(IconList)`
  justify-content: center;
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`
