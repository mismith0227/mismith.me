'use client'

import { useEffect, useState } from 'react'

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('darkMode', String(next))
    } catch {}
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      className="flex items-center gap-2 text-xs tracking-wide mt-8 p-0 border-none bg-transparent cursor-pointer text-current opacity-60 hover:opacity-100 transition-opacity"
    >
      <span
        className="relative w-8 h-4 rounded-full border border-current flex items-center transition-all"
        aria-hidden
      >
        <span
          className={`absolute w-2.5 h-2.5 rounded-full bg-current transition-transform ${
            isDark ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </span>
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}
