import { Download, MessageCircle, Star } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import { config, whatsappLink } from '../config'
import { services } from '../data/services'
import { produtos } from '../data/produtos'
import { nichos } from '../data/nichos'
import { solucoes } from '../data/solucoes'
import { avaliacoes } from '../data/avaliacoes'

export default function Home() {
  return (
    <>
      <Seo
        title="DSJ Contabilidade | Contabilidade digital para prestadores de serviço"
        description="Contabilidade online para prestadores de serviço, negócios digitais e profissionais da saúde em todo o Brasil. Simples, segura e 100% online, com atendimento por pessoas reais."
      />

      {/* 2. Hero */}
      <section id="inicio" className="relative overflow-hidden bg-brand-gray-50">
        <div
          aria-hidden
          className="blob absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-gray-100 blur-3xl opacity-70"
        />
        <div
          aria-hidden
          className="blob absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-brand-gray-300 blur-3xl opacity-40"
          style={{ animationDelay: '4s' }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-brand-black leading-tight">
                Contabilidade digital para prestadores de serviço
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-brand-gray-700">
                Cuidamos de toda a parte contábil e fiscal do seu negócio, de forma simples,
                segura e 100% online. Atendimento feito por pessoas reais, não por robôs.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="lift-on-hover inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
                >
                  <MessageCircle size={18} /> Falar agora
                </a>
                <a
                  href="#produtos"
                  className="lift-on-hover inline-flex items-center justify-center gap-2 rounded-full border border-brand-black px-6 py-3 font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
                >
                  Conhecer os planos
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-gray-100 border border-brand-gray-300">
              <img
                src={config.fotoPerfil}
                alt={config.brand.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Faixa de credibilidade */}
      <section className="border-y border-brand-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-center">
          <p className="font-heading text-lg">Atendimento feito por pessoas reais</p>
        </div>
      </section>

      {/* 4. Ganhando dinheiro prestando serviço? */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl">Ganhando dinheiro prestando serviço?</h2>
          <p className="mt-4 text-brand-gray-700">
            Deixe a parte contábil com a gente e foque no que importa: atender seus clientes e
            fazer o seu negócio crescer. Cuidamos de impostos, guias e prazos para você.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </Reveal>
      </section>

      {/* 5. As melhores soluções */}
      <section id="servicos" className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <Reveal>
            <h2 className="font-heading text-3xl text-center">
              As melhores soluções para o seu negócio
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solucoes.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 0.05}>
                <div className="lift-on-hover rounded-2xl border border-brand-gray-100 bg-brand-white p-6 h-full">
                  <div className="w-11 h-11 rounded-full bg-brand-gray-50 flex items-center justify-center text-brand-black">
                    <s.icon size={22} />
                  </div>
                  <h3 className="mt-4 font-heading text-lg">{s.titulo}</h3>
                  <p className="mt-2 text-sm text-brand-gray-700">{s.descricao}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-20 font-heading text-2xl text-center">Todos os serviços</h3>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Para quem a DSJ é especialista */}
      <section id="para-quem" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <Reveal>
          <h2 className="font-heading text-3xl text-center">Para quem a DSJ é especialista</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nichos.map((n, i) => (
            <Reveal key={n.titulo} delay={i * 0.05}>
              <div className="lift-on-hover rounded-2xl border border-brand-gray-100 p-6 h-full flex flex-col">
                <h3 className="font-heading text-lg">{n.titulo}</h3>
                <p className="mt-2 text-sm text-brand-gray-700 flex-1">{n.descricao}</p>
                <a
                  href={n.link}
                  className="mt-4 text-sm font-medium text-brand-black underline hover:text-brand-gray-700"
                >
                  Saiba mais
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Faixa de chamada para ação */}
      <section className="bg-brand-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl text-brand-white">
              Prestadores de serviço de todo o Brasil já confiam na DSJ
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink('Olá! Quero abrir minha empresa com a DSJ.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-white text-brand-black px-6 py-3 font-medium hover:bg-brand-gray-300 transition-colors"
              >
                Abrir minha empresa
              </a>
              <a
                href={whatsappLink('Olá! Quero migrar minha contabilidade para a DSJ.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-white text-brand-white px-6 py-3 font-medium hover:bg-brand-white hover:text-brand-black transition-colors"
              >
                Migrar de contabilidade
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Material gratuito */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl">{config.leadMagnet.titulo}</h2>
          <p className="mt-4 text-brand-gray-700">{config.leadMagnet.descricao}</p>
          <a
            href={config.leadMagnet.linkDownload}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
          >
            <Download size={18} /> Baixar agora
          </a>
        </Reveal>
      </section>

      {/* 9. Quem confia no meu trabalho */}
      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <Reveal>
            <h2 className="font-heading text-3xl text-center">Quem confia na DSJ</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {avaliacoes.map((a, i) => (
              <Reveal key={a.texto} delay={i * 0.05}>
                <figure className="lift-on-hover rounded-2xl bg-brand-white border border-brand-gray-100 p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex text-brand-black">
                      {Array.from({ length: a.estrelas }).map((_, s) => (
                        <Star key={s} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs text-brand-gray-500">{a.tempo}</span>
                  </div>
                  <blockquote className="mt-4 text-sm text-brand-gray-700 flex-1">{a.texto}</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Produtos digitais */}
      <section id="produtos" className="bg-brand-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <Reveal>
            <h2 className="font-heading text-3xl text-center text-brand-white">
              Produtos digitais para organizar seu negócio
            </h2>
            <p className="mt-4 text-center text-brand-gray-300 max-w-xl mx-auto">
              Materiais práticos, prontos para usar: ebooks, planilhas, guias e templates.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <ProductCard produto={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contato final */}
      <section id="contato" className="bg-brand-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl">Vamos simplificar a contabilidade do seu negócio?</h2>
            <p className="mt-4 text-brand-gray-700">
              Fale agora com a nossa equipe e tire suas dúvidas sem compromisso.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-8 py-4 font-medium hover:bg-brand-gray-700 transition-colors"
            >
              <MessageCircle size={18} /> Falar com a contabilidade
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
