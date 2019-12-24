import styled from 'styled-components'
import media from '../../../styles/media'
import IconList from '../../../components/molecules/IconList'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 12rem;

  ${media.large} {
    font-size: 10rem;
  }

  ${media.small} {
    font-size: 6rem;
  }
`

export const StyledIconList = styled(IconList)`
  margin: 2.4rem 0 0;
`
