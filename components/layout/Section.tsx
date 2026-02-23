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

  const hasHeader = !!(kicker || title || description);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${reveal ? "reveal" : ""} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      <Container className={containerClassName}>
        {hasHeader && (
          <>
            {/* Masthead editorial: kicker + 1 hairline */}
            <header className="mb-10 lg:mb-12">
              {kicker && <p className="kicker">{kicker}</p>}
              <div className="mt-3 border-t border-black/10" />
            </header>

            {/* Opcional: título/descripcion (si lo usas en secciones no-spread) */}
            {(title || description) && (
              <div className="mb-10 lg:mb-12">
                {title && <h2 className="h2 max-w-[20ch]">{title}</h2>}
                {description && (
                  <p className="p mt-6 lg:mt-7 max-w-[52ch]">
                    {description}
                  </p>
                )}
              </div>
            )}
          </>
        )}

        {children}
      </Container>
    </section>
  );
}