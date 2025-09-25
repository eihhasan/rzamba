"use client"
import { motion, useAnimation, useInView } from "framer-motion"
import { type PropsWithChildren, useEffect, useRef } from "react"

export function SectionReveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [inView, controls])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
