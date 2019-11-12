import styled from 'styled-components'
import IconList from '../../molecules/IconList'

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
  font-size: 120px;
`

export const StyledIconList = styled(IconList)`
  margin: 24px 0 0;
`
