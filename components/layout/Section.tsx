// components/layout/Section.tsx
"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;

  /** Animación al entrar en viewport */
  reveal?: boolean;

  /** Para headers editoriales (opcional) */
  kicker?: string;
  title?: string;
  description?: string;
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  reveal = true,
  kicker,
  title,
  description,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${reveal ? "reveal" : ""} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      <Container className={containerClassName}>
        {(kicker || title || description) && (
          <header className="mb-12 max-w-[72ch]">
            {kicker && <p className="kicker">{kicker}</p>}
            {title && <h2 className="h2 mt-4">{title}</h2>}
            {description && <p className="p mt-6">{description}</p>}
          </header>
        )}

        {children}
      </Container>
    </section>
  );
}
