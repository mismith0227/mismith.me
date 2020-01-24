import * as React from 'react'
import { Props } from './types'

import { StyledInput } from './styles'

const TextInput = React.forwardRef(
  ({ type = 'text', ...props }: Props, ref: React.Ref<HTMLInputElement>) => (
    <StyledInput {...props} ref={ref} type={type} />
  )
)

export default TextInput
