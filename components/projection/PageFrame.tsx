import Link from "next/link";
import type { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="premium-shell">
      <header className="mb-7 flex w-full items-start justify-between gap-4 sm:mb-9">
        <Link
          href="https://systia.fr"
          className="group inline-flex shrink-0 leading-none transition-colors duration-300"
          aria-label="Aller sur systia.fr"
        >
          <span
            className="
              text-[2rem]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#10224b]
              transition-colors
              duration-300
              group-hover:text-[#2f63e9]
              sm:text-[2.4rem]
              md:text-[2.8rem]
              lg:text-[3.1rem]
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
            }}
          >
            SYSTIA
          </span>
        </Link>

        <div className="shrink-0 pt-1.5 sm:pt-2">
          <div
            className="
              inline-flex
              min-h-[24px]
              items-center
              rounded-full
              border
              border-[rgba(92,120,196,0.12)]
              bg-[rgba(255,255,255,0.52)]
              px-2.5
              py-1
              text-[7px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[rgba(92,120,196,0.82)]
              shadow-[0_2px_8px_rgba(92,120,196,0.05)]
              backdrop-blur
              sm:min-h-[26px]
              sm:px-3
              sm:text-[8px]
            "
          >
            Diagnostic premium
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
