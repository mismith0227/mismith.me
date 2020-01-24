import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

const Button: React.FC<Props> = React.memo(
  ({ disabled = false, children, ...props }) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    return (
      <Wrap ref={buttonRef} disabled={disabled} {...props}>
        {children}
      </Wrap>
    )
  }
)

export default Button
