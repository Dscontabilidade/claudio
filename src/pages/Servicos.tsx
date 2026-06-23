import { MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { whatsappLink } from '../data/site'
import {
  FileCheck,
  Building2,
  Receipt,
  Calculator,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const icons = {
  FileCheck,
  Building2,
  Receipt,
  Calculator,
  ShieldCheck,
  TrendingUp,
}

export default function Servicos() {
  return (
    <>
      <Seo
        title="Serviços de contabilidade | DSJ Contabilidade"
        description="Conheça os serviços de contabilidade online da DSJ: abertura de empresa, MEI, regularização, Simples Nacional, declarações e consultoria fiscal."
      />

      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <Reveal>
            <h1 className="font-heading text-3xl sm:text-5xl">Nossos serviços</h1>
            <p className="mt-4 text-brand-gray-700">
              Tudo o que o seu negócio precisa para ficar em dia com o Fisco, explicado em
              linguagem simples.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="grid gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="rounded-2xl border border-brand-gray-100 p-6 sm:p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-gray-50 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl">{service.title}</h2>
                    <p className="mt-2 text-brand-gray-700">{service.shortDescription}</p>
                    <p className="mt-3 text-sm text-brand-gray-500">
                      <strong className="text-brand-black">Resolve: </strong>
                      {service.problem}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappLink('Olá! Quero saber mais sobre os serviços de contabilidade.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-8 py-4 font-medium hover:bg-brand-gray-700 transition-colors"
          >
            <MessageCircle size={18} /> Falar com um contador
          </a>
        </Reveal>
      </section>
    </>
  )
}
