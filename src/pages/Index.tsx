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
            Независимо. Персонально. Прозрачно.
          </span>
          <h1 className="text-balance mt-5 text-4xl font-semibold tracking-tight md:text-6xl font-serif">
            Защитите важное с уверенностью и ясностью.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Небольшая команда с персональным подходом. Полное покрытие, честные цены и дружелюбная поддержка, чтобы вы могли жить спокойно.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/insurances"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Покрытие и цены
            </Link>
            <Link
              to="/book-call"
              className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Записаться на звонок
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
          <Feature title="Понятные цены" desc="Прозрачные тарифы для каждого полиса без скрытых комиссий." />
          <Feature title="Персональный сервис" desc="Общайтесь с живым человеком, который знает вашу ситуацию." />
          <Feature title="Быстрые выплаты" desc="Поддержка по страховым случаям для быстрого решения вопросов." />
        </div>
      </section>
    </main>
  )
}
