import * as React from 'react'
import { Props } from './types'

import { StyledTextArea } from './styles'

const TextInput = React.forwardRef(
  ({ name, ...props }: Props, ref: React.Ref<HTMLInputElement>) => (
    <StyledTextArea {...props} ref={ref} name={name} />
  )
)

export default TextInput
