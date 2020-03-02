import styled from 'styled-components'
import media from '../../../styles/media'
import IconList from '../../../components/molecules/IconList'

export const Wrap = styled.div`
  max-width: 80rem;
  width: 96%;
  margin: 2rem auto 12rem;

  ${media.large} {
    margin: 2rem auto 8rem;
  }

  ${media.small} {
    margin: 2rem auto 4rem;
  }
`

export const Main = styled.div`
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.large} {
    height: 50rem;
  }

  ${media.small} {
    height: 40rem;
  }
`

export const Name = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 8rem;
  margin: 0.8rem 0 0;
  line-height: 1.2;

  ${media.large} {
    font-size: 6rem;
  }

  ${media.small} {
    font-size: 4.8rem;
  }
`

export const SubTitle = styled.div``

export const Section = styled.section`
  margin: 12rem 0 0;
  word-wrap: break-word;

  &:first-child {
    margin: 4rem 0 0;
  }

  ${media.large} {
    margin: 8rem 0 0;
  }

  ${media.small} {
    margin: 4rem 0 0;
  }
`

export const SectionInner = styled.div`
  opacity: ${({ isView }) => (isView ? 1 : 0)};
  transform: ${({ isView }) =>
    isView ? 'translate3d(0, 0, 0)' : `translate3d(0, 100px, 0)`};
  transition: opacity 1.5s ease, transform 1.5s ease;
`

export const Title = styled.h3`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 6.4rem;
  margin: 0;
  line-height: 1;

  ${media.large} {
    font-size: 5.6rem;
  }

  ${media.small} {
    font-size: 4rem;
  }
`

export const Text = styled.p`
  margin: 1.6rem 0 0;

  ${media.large} {
    margin: 1.2rem 0 0;
  }

  ${media.small} {
    margin: 0.8rem 0 0;
  }
`

export const BiographyList = styled.ul`
  margin: 2.4rem 0 0;
  padding: 0;
  list-style: none;
`

export const BiographyItem = styled.li`
  display: flex;
  margin: 1.6rem 0 0;

  &:first-child {
    margin: 0;
  }
`

export const BiographyDate = styled.h4`
  position: relative;
  margin: 0;
  width: 10rem;
  font-weight: normal;
`

export const BiographyTitle = styled.p`
  margin: 0;
  flex: 1;
`

export const TagList = styled.ul`
  margin: 2.4rem 0 0;
  padding: 0;
`

export const TagItem = styled.li`
  display: inline-block;
  margin: 0 0.8rem 0 0;

  &::after {
    content: '/';
    padding: 0 0 0 0.8rem;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
`

export const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2.4rem 0 0;
`

export const ActivitiesListItem = styled.li`
  margin: 2.4rem 0 0;

  &:first-child {
    margin: 0;
  }
`

export const ActivitiesListTitle = styled.h4`
  margin: 0;
`

export const ActivitiesListLink = styled.a``

export const StyledIconList = styled(IconList)`
  margin: 2.4rem 0 0;

  ${media.large} {
    margin: 1.2rem 0 0;
  }

  ${media.small} {
    margin: 0.8rem 0 0;
  }
`
