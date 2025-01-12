'use client'

import { useEffect, useRef } from 'react'

export function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el))
    }
  }, [])

  return observerRef.current
}

