import * as React from 'react'
import FivehundredpxIcon from '../../../components/atoms/Icon/Fivehundredpx'
import GitHubIcon from '../../../components/atoms/Icon/GitHub'
import InstagramIcon from '../../../components/atoms/Icon/Instagram'
import TwitterIcon from '../../../components/atoms/Icon/Twitter'
import { Props } from './types'

import { Wrap, Item, ExternalLink } from './styles'

const IconList = React.memo(({ className }: Props) => {
  return (
    <Wrap className={className}>
      <Item>
        <ExternalLink href="https://twitter.com/misumi_takuma/" target="_blank">
          <TwitterIcon />
        </ExternalLink>
      </Item>
      <Item>
        <ExternalLink href="https://500px.com/mismith2216" target="_blank">
          <FivehundredpxIcon />
        </ExternalLink>
      </Item>
      <Item>
        <ExternalLink
          href="https://www.instagram.com/mismith0227/?hl=ja"
          target="_blank"
        >
          <InstagramIcon />
        </ExternalLink>
      </Item>
      <Item>
        <ExternalLink href="https://github.com/mismith0227" target="_blank">
          <GitHubIcon />
        </ExternalLink>
      </Item>
    </Wrap>
  )
})

export default IconList
