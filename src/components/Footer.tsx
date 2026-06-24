import { ExternalLink, MessageCircle } from 'lucide-react'
import { config, whatsappLink } from '../config'
import { nichos } from '../data/nichos'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg text-brand-white">{config.brand.name}</p>
          <p className="mt-2 text-sm text-brand-gray-300">{config.brand.tagline}.</p>
          <p className="mt-2 text-sm text-brand-gray-300">{config.contato.cidade}.</p>
          <p className="mt-4 text-xs text-brand-gray-500">CNPJ: {config.contato.cnpj}</p>
          <p className="text-xs text-brand-gray-500">{config.contato.crc}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-white">Para quem é</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-gray-300">
            {nichos.map((n) => (
              <li key={n.titulo}>
                <a href={n.link} className="hover:text-brand-white">
                  {n.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-white">Serviços</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-gray-300">
            <li><a href="#servicos" className="hover:text-brand-white">Abertura de empresa</a></li>
            <li><a href="#servicos" className="hover:text-brand-white">Migração de contabilidade</a></li>
            <li><a href="#produtos" className="hover:text-brand-white">Produtos digitais</a></li>
            <li><a href="#contato" className="hover:text-brand-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-brand-white">Redes sociais</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-gray-300">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-white"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-white"
              >
                <ExternalLink size={16} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-gray-700 py-4 text-center text-xs text-brand-gray-500">
        {config.brand.name} © {new Date().getFullYear()}, Todos os direitos reservados.
      </div>
    </footer>
  )
}
