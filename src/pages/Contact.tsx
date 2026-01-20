import { Link } from "react-router-dom"

export default function ContactPage() {
  return (
    <main className="font-sans">
      <section className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Контакты</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          Мы готовы помочь. Свяжитесь по телефону или email, или запишитесь на консультацию.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h2 className="text-lg font-medium">Контактные данные</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="font-medium">Телефон:</span> +7 (495) 123-45-67
              </li>
              <li>
                <span className="font-medium">Email:</span> info@example.ru
              </li>
              <li>
                <span className="font-medium">Адрес:</span> г. Москва, ул. Примерная, д. 1, офис 100
              </li>
              <li>
                <span className="font-medium">Часы работы:</span> Пн-Пт, 9:00-18:00
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-5">
            <h2 className="text-lg font-medium">Записаться на консультацию</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Выберите удобное время. Мы подтвердим и отправим приглашение в календарь.
            </p>
            <div className="mt-4">
              <Link
                to="/book-call"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Записаться
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
