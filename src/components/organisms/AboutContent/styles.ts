import styled from 'styled-components'
import media from '../../../styles/media'
import IconList from '../../../components/molecules/IconList'

export const Wrap = styled.div`
  max-width: 80rem;
  width: 96%;
  margin: 12rem auto;

  ${media.large} {
    margin: 8rem auto;
  }

  ${media.small} {
    margin: 4rem auto;
  }
`

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
`

export const IconWrap = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;

  ${media.large} {
    width: 10rem;
    height: 10rem;
  }

  ${media.small} {
    width: 8rem;
    height: 8rem;
  }
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`

export const Name = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 8rem;
  margin: 2.4rem 0 0;

  ${media.large} {
    font-size: 6rem;
    margin: 2rem 0 0;
  }

  ${media.small} {
    font-size: 4.8rem;
    margin: 1.6rem 0 0;
  }
`

export const Section = styled.section`
  margin: 2.4rem 0 0;

  ${media.large} {
    margin: 2rem 0 0;
  }

  ${media.small} {
    margin: 1.6rem 0 0;
  }
`

export const Title = styled.h3`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 6.4rem;
  margin: 0;

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

export const List = styled.ul``

export const Item = styled.li``

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

export const StyledIconList = styled(IconList)`
  margin: 2.4rem 0 0;

  ${media.large} {
    margin: 1.2rem 0 0;
  }

  ${media.small} {
    margin: 0.8rem 0 0;
  }
`
