import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = { role: "user" | "assistant"; content: string }

export function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Здравствуйте! Я ассистент ЧистыйЩит. Чем могу помочь?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [messages, open])

  async function onSend(e: React.FormEvent) {
    e.preventDefault()
    const content = input.trim()
    if (!content || loading) return

    const next: Message[] = [...messages, { role: "user", content }]
    setMessages(next)
    setInput("")
    setLoading(true)

    // Simulated response for demo purposes
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Спасибо за ваше сообщение! Это демо-версия чат-бота. В рабочей версии здесь будет подключен AI-сервис для консультаций по страхованию, ценам и записи на встречу.",
        },
      ])
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <button
        aria-label={open ? "Закрыть AI-чат" : "Открыть AI-чат"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed z-40 bottom-5 right-5 h-12 w-12 rounded-full",
          "bg-neutral-900 text-neutral-100 shadow-lg ring-1 ring-neutral-700",
          "hover:bg-neutral-800 transition-colors"
        )}
      >
        AI
      </button>

      {open && (
        <Card
          role="dialog"
          aria-label="AI-чат"
          className={cn(
            "fixed z-50 bottom-20 right-5 w-[320px] sm:w-[360px]",
            "bg-neutral-950 text-neutral-100 border border-neutral-800 shadow-2xl"
          )}
        >
          <div className="p-3 border-b border-neutral-800">
            <div className="font-serif text-lg">AI-ассистент ЧистыйЩит</div>
            <div className="text-xs text-neutral-400">Спросите о покрытии, ценах или консультации</div>
          </div>

          <div ref={viewportRef} className="px-3 py-3 max-h-[340px] overflow-y-auto space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("leading-relaxed", m.role === "user" ? "text-neutral-100" : "text-neutral-200")}
              >
                <span className="font-medium mr-1">{m.role === "user" ? "Вы:" : "AI:"}</span>
                <span className="text-pretty">{m.content}</span>
              </div>
            ))}
            {loading && <div className="text-neutral-400">Думаю...</div>}
          </div>

          <form onSubmit={onSend} className="p-3 border-t border-neutral-800 flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите вопрос..."
              className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500"
              aria-label="Сообщение"
            />
            <Button type="submit" disabled={loading} className="bg-neutral-100 text-neutral-900 hover:bg-white">
              Отправить
            </Button>
          </form>
        </Card>
      )}
    </>
  )
}
