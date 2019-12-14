import * as React from 'react'

import { Pointer, Follower } from './styles'

const Cursor = React.memo(() => {
  const [cursorPosX, setCursorPosX] = React.useState(-1000)
  const [cursorPosY, setCursorPosY] = React.useState(-1000)

  const [followerPosX, setFollowerPosX] = React.useState(-1000)
  const [followerPosY, setFollowerPosY] = React.useState(-1000)

  document.onmousemove = e => {
    setTimeout(() => {
      setCursorPosX(e.pageX)
      setCursorPosY(e.pageY)
    }, 50)

    setTimeout(() => {
      setFollowerPosX(e.pageX)
      setFollowerPosY(e.pageY)
    }, 150)
  }
  const cursorStyle = {
    top: `${cursorPosY}px`,
    left: `${cursorPosX}px`,
  }
  const followerStyle = {
    top: `${followerPosY}px`,
    left: `${followerPosX}px`,
  }
  return (
    <>
      <Pointer style={cursorStyle} />
      <Follower style={followerStyle} />
    </>
  )
})

export default Cursor
