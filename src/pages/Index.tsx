import { Link } from "react-router-dom"

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-5">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  )
}

export default function Index() {
  return (
    <main className="font-sans">
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <header className="mb-12">
          <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Профессионально. Справедливо. Эффективно.
          </span>
          <h1 className="text-balance mt-5 text-4xl font-semibold tracking-tight md:text-6xl font-serif">
            Защитим ваши права от врачебных ошибок.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Некоммерческая организация с опытными юристами. Бесплатные консультации, защита в суде и реальная помощь пострадавшим от халатности медиков.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/insurances"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Наши услуги
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Получить консультацию
            </Link>
            <Link
              to="/reviews"
              className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Читать отзывы
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Feature title="Бесплатная помощь" desc="Первичная консультация и оценка вашего случая абсолютно бесплатно." />
          <Feature title="Опытные юристы" desc="Специалисты в медицинском праве с успешными делами против клиник." />
          <Feature title="Защита в суде" desc="Полное юридическое сопровождение от претензии до судебного решения." />
        </div>
      </section>
    </main>
  )
}