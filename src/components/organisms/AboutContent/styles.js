import styled from 'styled-components'
import media from '~/styles/media'
import IconList from '~/components/molecules/IconList'

export const Wrap = styled.div`
  max-width: 800px;
  width: 96%;
  margin: 120px auto;

  ${media.large} {
    margin: 80px auto;
  }

  ${media.small} {
    margin: 40px auto;
  }
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

  ${media.large} {
    width: 100px;
    height: 100px;
  }

  ${media.small} {
    width: 80px;
    height: 80px;
  }
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`

export const Name = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 80px;
  margin: 24px 0 0;

  ${media.large} {
    font-size: 60px;
    margin: 20px 0 0;
  }

  ${media.small} {
    font-size: 48px;
    margin: 16px 0 0;
  }
`

export const Section = styled.section`
  margin: 24px 0 0;

  ${media.large} {
    margin: 20px 0 0;
  }

  ${media.small} {
    margin: 16px 0 0;
  }
`

export const Title = styled.h3`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 64px;
  margin: 0;

  ${media.large} {
    font-size: 56px;
  }

  ${media.small} {
    font-size: 40px;
  }
`

export const Text = styled.p`
  margin: 16px 0 0;

  ${media.large} {
    margin: 12px 0 0;
  }

  ${media.small} {
    margin: 8px 0 0;
  }
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

  ${media.large} {
    margin: 12px 0 0;
  }

  ${media.small} {
    margin: 8px 0 0;
  }
`
