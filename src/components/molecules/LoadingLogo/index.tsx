import * as React from 'react'
import { Props } from './types'
import { Link } from 'gatsby'

import { LoadOverlay, StyledLogo } from './styles'

const LoadingLogo = React.memo(({ className, isloading = false }: Props) => {
  return (
    <>
      <Link to="/" aria-label="トップへ">
        <StyledLogo isloading={isloading} />
      </Link>

      <LoadOverlay className={className} isloading={isloading}></LoadOverlay>
    </>
  )
})

export default LoadingLogo
