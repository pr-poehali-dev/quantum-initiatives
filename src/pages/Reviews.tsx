import { ReviewSection } from "@/components/ReviewSection"

export default function ReviewsPage() {
  return (
    <main className="font-sans">
      <section className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Отзывы клиентов</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Скоро здесь появятся отзывы в реальном времени. Пока вы можете добавить отзыв ниже.
        </p>

        <div className="mt-8">
          <ReviewSection />
        </div>
      </section>
    </main>
  )
}
