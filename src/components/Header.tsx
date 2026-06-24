import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { config, whatsappLink } from '../config'

// Itens do menu. O "to" é o id da seção que ele rola até.
const navItems = [
  { to: '#inicio', label: 'Início' },
  { to: '#servicos', label: 'Serviços' },
  { to: '#para-quem', label: 'Para quem é' },
  { to: '#produtos', label: 'Produtos' },
  { to: '#conteudos', label: 'Conteúdos' },
  { to: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/95 backdrop-blur border-b border-brand-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#inicio"
          className="font-heading text-xl font-semibold text-brand-black"
          onClick={() => setOpen(false)}
        >
          {config.brand.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm font-medium text-brand-gray-700 transition-colors hover:text-brand-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-brand-black text-brand-white px-5 py-2.5 text-sm font-medium hover:bg-brand-gray-700 transition-colors"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="md:hidden p-2 text-brand-black"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-brand-gray-100 bg-brand-white px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-brand-gray-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-brand-black text-brand-white px-5 py-2.5 text-sm font-medium"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
