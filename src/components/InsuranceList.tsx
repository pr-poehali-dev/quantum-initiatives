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
    id: "auto",
    name: "Автострахование",
    summary: "Защита автомобиля, пассажиров и ответственности.",
    monthlyFrom: 3900,
    features: ["ОСАГО", "КАСКО", "Полное покрытие", "Помощь на дороге"],
  },
  {
    id: "home",
    name: "Страхование жилья",
    summary: "Защита дома и имущества от непредвиденных ситуаций.",
    monthlyFrom: 2900,
    features: ["Конструкция", "Личное имущество", "Ответственность", "Временное жилье"],
  },
  {
    id: "life",
    name: "Страхование жизни",
    summary: "Финансовая защита для ваших близких.",
    monthlyFrom: 2500,
    features: ["Срочное", "Накопительное", "Гибкие условия"],
  },
  {
    id: "health",
    name: "Медстрахование",
    summary: "Покрытие медицинских расходов и профилактики.",
    monthlyFrom: 5900,
    features: ["Терапевт", "Специалисты", "Экстренная помощь", "Лекарства"],
  },
  {
    id: "travel",
    name: "Страхование путешествий",
    summary: "Защита поездок при отмене и медицинских случаях.",
    monthlyFrom: 1200,
    features: ["Отмена поездки", "Медпомощь", "Багаж", "Поддержка 24/7"],
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
          <span className="sr-only">Поиск страховок</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск покрытия (напр., КАСКО, путешествия)..."
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
                От <span className="text-foreground">{plan.monthlyFrom.toLocaleString('ru-RU')}&nbsp;&#8381;/мес</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
