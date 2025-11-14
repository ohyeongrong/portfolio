'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef(null)

    useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 2.4 }
    )
  }, [])

  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  )
}
