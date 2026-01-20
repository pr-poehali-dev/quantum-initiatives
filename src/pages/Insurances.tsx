import { InsuranceList } from "@/components/InsuranceList"

export default function InsurancesPage() {
  return (
    <main className="font-sans">
      <section className="mx-auto max-w-5xl px-4 py-10 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Страхование и цены</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Изучите варианты покрытия и простые тарифы. Свяжитесь с нами для персональных рекомендаций.
        </p>

        <div className="mt-8">
          <InsuranceList />
        </div>
      </section>
    </main>
  )
}
