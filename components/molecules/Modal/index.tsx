import { createPortal } from 'react-dom'
import { Wrap } from './styles'
import { Props } from './types'

export const Modal = ({ id, className, children }: Props) => {
  return createPortal(
    <div id={id} aria-hidden="true">
      <div tabIndex={-1} data-micromodal-close>
        <div role="dialog" aria-modal="true">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
