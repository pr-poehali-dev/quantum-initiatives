import { useState } from "react"

type Plan = {
  id: string
  name: string
  summary: string
  monthlyFrom: number
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: "consult",
    name: "Первичная консультация",
    summary: "Бесплатная оценка вашего случая и рекомендации.",
    monthlyFrom: 0,
    features: ["Анализ документов", "Оценка перспектив дела", "Правовые рекомендации", "Без обязательств"],
  },
  {
    id: "claim",
    name: "Досудебная претензия",
    summary: "Подготовка и направление претензии медучреждению.",
    monthlyFrom: 15000,
    features: ["Сбор доказательств", "Экспертиза документов", "Составление претензии", "Переговоры с клиникой"],
  },
  {
    id: "court",
    name: "Судебная защита",
    summary: "Полное представительство в суде по вашему делу.",
    monthlyFrom: 35000,
    features: ["Подготовка иска", "Представительство в суде", "Работа с экспертами", "Взыскание компенсации"],
  },
  {
    id: "expert",
    name: "Медицинская экспертиза",
    summary: "Независимая оценка качества медицинской помощи.",
    monthlyFrom: 20000,
    features: ["Привлечение экспертов", "Анализ медкарты", "Заключение специалистов", "Доказательная база"],
  },
  {
    id: "support",
    name: "Правовое сопровождение",
    summary: "Комплексная поддержка на всех этапах дела.",
    monthlyFrom: 50000,
    features: ["Полный цикл работ", "От претензии до суда", "Психологическая поддержка", "Гарантия результата"],
  },
]

export function InsuranceList() {
  const [query, setQuery] = useState("")

  const filtered = PLANS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase()) ||
      p.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <label className="w-full md:max-w-sm">
          <span className="sr-only">Поиск услуг</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск услуги (напр., консультация, суд)..."
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((plan) => (
          <article key={plan.id} className="flex flex-col rounded-lg border p-5">
            <header>
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.summary}</p>
            </header>
            <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <p className="text-sm">
                {plan.monthlyFrom === 0 ? (
                  <span className="text-foreground font-medium">Бесплатно</span>
                ) : (
                  <>От <span className="text-foreground">{plan.monthlyFrom.toLocaleString('ru-RU')}&nbsp;&#8381;</span></>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}