import { Link } from "react-router-dom"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-primary/15 ring-1 ring-primary/30" aria-hidden="true" />
          <span className="font-serif text-lg font-semibold tracking-tight">ЧистыйЩит</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link className="transition hover:text-primary" to="/insurances">
            Страхование
          </Link>
          <Link className="transition hover:text-primary" to="/reviews">
            Отзывы
          </Link>
          <Link className="transition hover:text-primary" to="/contact">
            Контакты
          </Link>
          <Link
            className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-primary-foreground transition hover:opacity-90"
            to="/book-call"
          >
            Записаться
          </Link>
        </nav>
      </div>
    </header>
  )
}
