import { useEffect, useLayoutEffect, useState } from 'react'

// ❗️ Hookとして直接使えるように変更
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0])

  useIsomorphicLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}
