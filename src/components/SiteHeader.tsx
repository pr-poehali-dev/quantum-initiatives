import { Link } from "react-router-dom"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/projects/968de135-91ec-4735-aef3-8da7f232df12/files/e27f06ca-bd02-409b-b716-8d565b9f8af3.jpg" 
            alt="ПравоЗащита"
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className="font-serif text-lg font-semibold tracking-tight">ПравоЗащита</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link className="transition hover:text-primary" to="/insurances">
            Услуги
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