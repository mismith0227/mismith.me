import * as React from 'react'

export interface ExternalProps {
  readonly type?: string
  readonly value?: string | number
  readonly name?: string
  readonly id?: string
  readonly className?: string
  readonly defaultValue?: string
  readonly placeholder?: string
  readonly disabled?: boolean
  readonly isError?: boolean
  readonly isEdited?: boolean
  readonly isSelected?: boolean
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  readonly onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  readonly onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  readonly onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type Props = ExternalProps
