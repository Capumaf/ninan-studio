"use client"

import React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: keyof typeof motion
  /** true = solo una vez (editorial recomendado) */
  once?: boolean
  /** qué % debe entrar para disparar */
  amount?: number
  /** delay adicional en segundos */
  delay?: number
}

const easeSettle: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Reveal({
  children,
  className,
  as = "div",
  once = true,
  amount = 0.75,
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as any

  const variants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -15% 0px" }}
      transition={reduce ? { duration: 0 } : { delay, duration: 0.62, ease: easeSettle }}
    >
      {children}
    </Comp>
  )
}

type RevealGroupProps = {
  children: React.ReactNode
  className?: string
  as?: keyof typeof motion
  once?: boolean
  amount?: number
  delayChildren?: number
  stagger?: number
}

export function RevealGroup({
  children,
  className,
  as = "div",
  once = true,
  amount = 0.75,
  delayChildren = 0,
  stagger = 0.06,
}: RevealGroupProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as any

  const parent: Variants = {
    hidden: {},
    show: {
      transition: reduce
        ? { duration: 0 }
        : { delayChildren, staggerChildren: stagger },
    },
  }

  return (
    <Comp
      className={className}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -15% 0px" }}
    >
      {children}
    </Comp>
  )
}

export function HairlineReveal({
  className,
  once = true,
  amount = 0.75,
  delay = 0,
}: {
  className?: string
  once?: boolean
  amount?: number
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.75 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once, amount, margin: "0px 0px -15% 0px" }}
      transition={reduce ? { duration: 0 } : { delay, duration: 0.7, ease: easeSettle }}
      style={{ transformOrigin: "left" }}
    />
  )
}