import Link from "next/link";
import type { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="premium-shell">
      <header className="mb-8 flex w-full items-start justify-between gap-4 sm:mb-10">
        <Link
          href="/"
          className="
            group
            inline-flex
            shrink-0
            leading-none
            transition-colors
            duration-300
          "
          aria-label="Retour à l’accueil SYSTIA"
        >
          <span
            className="
              text-[2.7rem]
              leading-[0.9]
              tracking-[-0.045em]
              text-[#10224b]
              transition-colors
              duration-300
              group-hover:text-[#2f63e9]
              sm:text-[3.2rem]
              md:text-[3.8rem]
              lg:text-[4.2rem]
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
            }}
          >
            SYSTIA
          </span>
        </Link>

        <div className="shrink-0 pt-2 sm:pt-3">
          <div
            className="
              inline-flex
              min-h-[26px]
              items-center
              rounded-full
              border
              border-[rgba(92,120,196,0.12)]
              bg-[rgba(255,255,255,0.52)]
              px-3
              py-1
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[rgba(92,120,196,0.82)]
              shadow-[0_2px_8px_rgba(92,120,196,0.05)]
              backdrop-blur
              sm:min-h-[28px]
              sm:px-3.5
              sm:text-[9px]
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
