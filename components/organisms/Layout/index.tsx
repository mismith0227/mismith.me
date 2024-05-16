import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import styled from '@emotion/styled'
import { Navigation } from '@/components/organisms/Navigation'

const Wrap = styled.div`
  position: relative;
`

const StyledNavigation = styled(Navigation)`
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 5;
`

type Props = {
  children: React.ReactNode
  path: string
}

export const Layout = ({ children, path }: Props) => (
  <>
    <Global styles={globalStyle} />
    <Wrap>
      <StyledNavigation path={path} />
      {children}
    </Wrap>
  </>
)
