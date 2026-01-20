import type React from "react"
import { useState } from "react"

export function BookingForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border p-5">
        <h2 className="text-lg font-medium">Заявка получена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Спасибо{name ? `, ${name}` : ""}! Мы скоро подтвердим вашу консультацию.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm">Имя и фамилия</span>
          <input
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Петров"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ivan@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm">Удобная дата</span>
          <input
            type="date"
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm">Удобное время</span>
          <input
            type="time"
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm">Комментарий (необязательно)</span>
        <textarea
          rows={4}
          className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Расскажите, что вас интересует..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Отправить заявку
      </button>
    </form>
  )
}
