import Link from "next/link";
import type { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="premium-shell">
      <header className="mb-10 flex w-full items-start justify-between gap-6">
        <Link
          href="/"
          className="inline-flex shrink-0 flex-col items-start leading-none"
        >
          <span
            className="
              text-[4.2rem]
              leading-[0.9]
              tracking-[-0.05em]
              text-[#10224b]
              sm:text-[5rem]
              md:text-[5.6rem]
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 500,
            }}
          >
            SYSTIA
          </span>

          <span
            className="
              mt-2
              text-[0.95rem]
              leading-relaxed
              text-[#5e6985]
              sm:text-[1rem]
            "
          >
            Structuration & développement d’activités
          </span>

          <span className="mt-4 block h-px w-14 bg-[rgba(23,38,63,0.14)]" />

          <span
            className="
              mt-4
              text-[1rem]
              text-[#3658b3]
              transition-opacity
              duration-200
              hover:opacity-70
            "
          >
            systia.fr
          </span>
        </Link>

        <div className="shrink-0 pt-3">
          <div
            className="
              inline-flex
              min-h-[30px]
              items-center
              rounded-full
              border
              border-[rgba(92,120,196,0.12)]
              bg-[rgba(255,255,255,0.52)]
              px-4
              py-1.5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-[rgba(92,120,196,0.82)]
              shadow-[0_2px_8px_rgba(92,120,196,0.05)]
              backdrop-blur
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
