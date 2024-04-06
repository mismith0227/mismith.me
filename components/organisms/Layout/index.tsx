import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import { Wrap, StyledNavigation } from './styles'
import { Props } from './types'

export const Layout = ({ children, path, photoCategory }: Props) => (
  <>
    <Global styles={globalStyle} />
    <Wrap>
      <StyledNavigation path={path} photoCategory={photoCategory} />
      {children}
    </Wrap>
  </>
)
