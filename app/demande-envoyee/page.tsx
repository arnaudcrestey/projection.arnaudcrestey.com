import Link from "next/link";
import { PageFrame } from "@/components/projection/PageFrame";

export default function DemandeEnvoyeePage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-4xl py-4 md:py-8">
        <div className="relative overflow-hidden rounded-[30px] border border-[#d9e4f5] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,250,255,0.98)_100%)] px-6 py-10 shadow-[0_30px_90px_rgba(20,45,95,0.07)] sm:px-8 sm:py-12 md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_32%)]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#dbe6f6] bg-white/90 shadow-[0_14px_28px_rgba(34,72,140,0.08)] md:h-16 md:w-16">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-[#2f63e9] md:h-7 md:w-7"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5L9.5 17L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6a81a8] md:text-[11px]">
              Demande envoyée
            </p>

            <h1 className="mt-3 text-[30px] font-semibold leading-tight text-[#102b52] md:text-[44px] md:leading-[1.08]">
              Merci, votre demande a bien été transmise
            </h1>

            <p className="mt-4 text-[15px] leading-8 text-[#5c7297] md:text-[17px]">
              Votre message a bien été reçu. 
            </p>

            <div className="mt-6 rounded-[20px] border border-[#e1e8f4] bg-white/75 px-5 py-5 text-left shadow-[0_12px_30px_rgba(30,58,110,0.04)] md:px-6 md:py-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f83a7]">
                Ce qu’il se passe maintenant
              </p>

              <div className="mt-4 space-y-3 text-[14px] leading-7 text-[#17304f] md:text-[15px]">
                <p>• votre demande est relue avec attention</p>
                <p>• les éléments utiles de votre diagnostic sont repris</p>
                <p>• vous recevez ensuite un retour simple, ciblé et concret</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/questions"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#d7e2f3] bg-white px-6 text-[14px] font-medium text-[#173b73] transition hover:border-[#bfd0eb] hover:bg-[#f9fbff]"
              >
                Refaire le diagnostic
              </Link>

              <Link
                href="https://systia.fr"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#2f63e9_0%,#2d58cf_100%)] px-6 text-[14px] font-semibold text-white shadow-[0_16px_34px_rgba(47,99,233,0.24)] transition hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(47,99,233,0.30)]"
              >
                Continuer sur systia.fr
              </Link>
            </div>

           </div>
        </div>
      </section>
    </PageFrame>
  );
}
