import { Link } from 'react-router-dom'
import { ExternalLink, Mail, MessageCircle } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg text-brand-white">{site.name}</p>
          <p className="mt-2 text-sm text-brand-gray-300">{site.tagline}.</p>
          <p className="mt-2 text-sm text-brand-gray-300">{site.city}.</p>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-white">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-gray-300">
            <li><Link to="/servicos" className="hover:text-brand-yellow">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-brand-yellow">Produtos digitais</Link></li>
            <li><Link to="/sobre" className="hover:text-brand-yellow">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-brand-yellow">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-white">Fale com a gente</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-gray-300">
            <li>
              <a
                href={whatsappLink('Olá! Vim pelo site e quero falar com um contador.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-yellow"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-brand-yellow"
              >
                <Mail size={16} /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-yellow"
              >
                <ExternalLink size={16} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-gray-700 py-4 text-center text-xs text-brand-gray-500">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
