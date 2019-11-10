import * as React from 'react'
import FivehundredpxIcon from '../../atoms/Icon/Fivehundredpx'
import GitHubIcon from '../../atoms/Icon/GitHub'
import InstagramIcon from '../../atoms/Icon/Instagram'
import TwitterIcon from '../../atoms/Icon/Twitter'

import { Wrap, Item, ExternalLink } from './styles'

const IconList = React.memo(({ className }) => {
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
