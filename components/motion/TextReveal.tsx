"use client"

import { motion, useReducedMotion } from "framer-motion"

type Props = {
  text: string
  className?: string
  delay?: number
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function TextReveal({ text, className, delay = 0 }: Props) {
  const reduce = useReducedMotion()
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            reduce
              ? { duration: 0 }
              : { delay: delay + i * 0.04, duration: 0.01, ease }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}