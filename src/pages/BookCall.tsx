import { BookingForm } from "@/components/BookingForm"

export default function BookCallPage() {
  return (
    <main className="font-sans">
      <section className="mx-auto max-w-xl px-4 py-10 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Записаться на консультацию</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Выберите удобную дату и время. Мы свяжемся с вами для подтверждения.
        </p>

        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
