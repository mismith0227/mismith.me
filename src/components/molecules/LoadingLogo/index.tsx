import * as React from 'react'
import { Props } from './types'

import { LoadOverlay, StyledLogo } from './styles'

const LoadingLogo = React.memo(({ className, isloading = false }: Props) => {
  return (
    <>
      <StyledLogo isloading={isloading} />
      <LoadOverlay className={className} isloading={isloading}></LoadOverlay>
    </>
  )
})

export default LoadingLogo
