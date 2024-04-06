import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import media from '@/styles/media'
import { IconList, IconListItem } from '@/components/molecules/IconList'
import { TagList } from '@/components/molecules/TagList'
import { Container } from '@/components/organisms/Container'
import { Heading } from '@/components/atoms/Heading'
import { Logo } from '@/components/atoms/Icon/Logo'
import { OpenInNew } from '@/components/atoms/Icon/OpenInNew'

export const StyledContainer = styled(Container)``

export const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

export const StyledLogo = styled(Logo)`
  margin-right: 16px;
  font-size: 2rem;
`

export const Section = styled.section`
  margin: 80px 0 0;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.small} {
    margin: 64px auto 0;

    &:first-of-type {
      margin: 64px auto 0;
    }
  }
`

export const SectionInner = styled.div``

export const SectionContent = styled.div`
  margin: 24px 0 0;
`

export const Text = styled.p`
  max-width: 700px;
`

export const StyledTagList = styled(TagList)`
  max-width: 700px;
  margin-top: 16px;
`

export const Biographies = styled.ul`
  margin: 36px 0 0;
  padding: 0;
  list-style: none;
`

export const BiographyItem = styled.li`
  position: relative;
  padding: 0 0 52px 52px;

  ${media.medium} {
    flex-direction: column;
    padding: 0 0 36px 36px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 0;
    background-color: #fff;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 9999px;
    z-index: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 7px;
    width: 1px;
    height: 100%;
    background-color: #000;
  }

  &:first-of-type {
    &::before {
      background-color: #000;
    }
  }

  &:last-of-type {
    &::after {
      border-right: 1px dashed #aaa;
      left: 6px;
      background-color: #fff;
    }
  }
`

export const BiographyDate = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

export const BiographyProfession = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const BiographyRole = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`

export const BiographyDetail = styled.p`
  margin: 14px 0 0;
  max-width: 700px;
  font-size: 14px;
  white-space: pre-wrap;
`

export const StyledIconList = styled(IconList)`
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`

export const Email = styled.p``

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  gap: 0 16px;
`

export const ListItemText = styled.p``

export const ListItemNote = styled.p`
  font-weight: bold;
`

export const ListItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0 8px;
  color: #000;

  &:hover {
    text-decoration: none;
  }
`

export const StyledOpenInNew = styled(OpenInNew)`
  font-size: 16px;
`
