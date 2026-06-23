import { useState, type FormEvent } from 'react'
import { ExternalLink, Mail, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'

export default function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const text = `Olá! Meu nome é ${name} (${email}).\n\n${message}`
    window.open(whatsappLink(text), '_blank', 'noreferrer')
  }

  return (
    <>
      <Seo
        title="Contato | DSJ Contabilidade"
        description="Fale com a DSJ Contabilidade pelo WhatsApp, e-mail ou Instagram. Atendimento online para todo o Brasil."
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <Reveal>
          <h1 className="font-heading text-3xl sm:text-5xl text-center">Contato</h1>
          <p className="mt-4 text-center text-brand-gray-700">
            Preencha o formulário ou fale direto com a gente. Estamos aqui para ajudar.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-10">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-brand-gray-300 px-4 py-3 focus:outline-2 focus:outline-brand-yellow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-brand-gray-300 px-4 py-3 focus:outline-2 focus:outline-brand-yellow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-brand-gray-300 px-4 py-3 focus:outline-2 focus:outline-brand-yellow"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
              >
                <MessageCircle size={18} /> Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-brand-gray-50 p-6 sm:p-8 space-y-4">
              <p className="font-heading text-xl">Outros canais</p>
              <a
                href={whatsappLink('Olá! Vim pelo site e quero falar com um contador.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-brand-gray-700 hover:text-brand-black"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-brand-gray-700 hover:text-brand-black"
              >
                <Mail size={20} /> {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-brand-gray-700 hover:text-brand-black"
              >
                <ExternalLink size={20} /> Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
