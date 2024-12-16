import { useEffect, useLayoutEffect, useState } from 'react'

export const useIsomorphicEffect = () => {
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect
}

export const useWindowSize = (): number[] => {
  const isomorphicEffect = useIsomorphicEffect()
  const [size, setSize] = useState([0, 0])

  isomorphicEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}
