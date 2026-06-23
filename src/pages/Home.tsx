import { Link } from 'react-router-dom'
import { MessageCircle, ShoppingBag } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import { whatsappLink } from '../data/site'
import { services } from '../data/services'
import { products } from '../data/products'
import { audiences, differentiators, testimonials } from '../data/content'

export default function Home() {
  const featuredServices = services.slice(0, 4)
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Seo
        title="DSJ Contabilidade | Simplificar a contabilidade é o nosso foco"
        description="Contabilidade online para todo o Brasil. Cuidamos do seu MEI, da sua empresa de serviços ou do seu negócio digital com simplicidade e atendimento humano."
      />

      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <Reveal>
            <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-brand-black leading-tight">
              Simplificar a contabilidade é o nosso foco
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-gray-700">
              Atendemos todo o Brasil, 100% online. Cuidamos da parte fiscal do seu negócio
              enquanto você foca em fazer o que faz de melhor.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink('Olá! Vim pelo site e quero falar com um contador.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
              >
                <MessageCircle size={18} /> Falar com um contador
              </a>
              <Link
                to="/produtos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow text-brand-black px-6 py-3 font-medium hover:bg-brand-yellow-dark transition-colors"
              >
                <ShoppingBag size={18} /> Ver produtos digitais
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl text-center">Para quem é a DSJ</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-brand-gray-100 p-6 h-full">
                <h3 className="font-heading text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-700">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl text-center">
              Serviços em destaque
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center rounded-full border border-brand-black px-6 py-3 font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl text-center text-brand-white">
              Produtos digitais em destaque
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/produtos"
              className="inline-flex items-center justify-center rounded-full bg-brand-yellow text-brand-black px-6 py-3 font-medium hover:bg-brand-yellow-dark transition-colors"
            >
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl text-center">Por que a DSJ</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="text-center">
                <h3 className="font-heading text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-700">{d.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl text-center">
              Quem confia na DSJ
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <figure className="rounded-2xl bg-brand-white border border-brand-gray-100 p-6 h-full flex flex-col">
                  <blockquote className="text-sm text-brand-gray-700 flex-1">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium">
                    {t.name}
                    <span className="block text-brand-gray-500 font-normal">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl">
            Vamos simplificar a contabilidade do seu negócio?
          </h2>
          <p className="mt-4 text-brand-gray-700">
            Fale agora com a nossa equipe e tire suas dúvidas sem compromisso.
          </p>
          <a
            href={whatsappLink('Olá! Vim pelo site e quero falar com um contador.')}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-8 py-4 font-medium hover:bg-brand-gray-700 transition-colors"
          >
            <MessageCircle size={18} /> Falar com a contabilidade
          </a>
        </Reveal>
      </section>
    </>
  )
}
