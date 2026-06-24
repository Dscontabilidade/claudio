import { Download, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import { config, whatsappLink } from '../config'
import { services } from '../data/services'
import { produtos } from '../data/produtos'
import { nichos } from '../data/nichos'
import { solucoes } from '../data/solucoes'
import { depoimentos } from '../data/depoimentos'
import { artigos } from '../data/blog'

export default function Home() {
  return (
    <>
      <Seo
        title="DSJ Contabilidade | Contabilidade digital para prestadores de serviço"
        description="Contabilidade online para prestadores de serviço, negócios digitais e profissionais da saúde em todo o Brasil. Simples, segura e 100% online, com atendimento por pessoas reais."
      />

      {/* 2. Hero */}
      <section id="inicio" className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-gray-700 transition-colors"
                >
                  <MessageCircle size={18} /> Falar agora
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-black px-6 py-3 font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
                >
                  Conhecer os planos
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="aspect-square rounded-2xl bg-brand-gray-100 border border-brand-gray-300 flex items-center justify-center text-brand-gray-500 text-sm">
              Imagem do hero (troque por uma foto da equipe ou ilustração)
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Faixa de credibilidade */}
      <section className="border-y border-brand-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="font-heading text-lg">Atendimento feito por pessoas reais</p>
          <div className="flex gap-10">
            <div>
              <p className="font-heading text-2xl">{config.stats.anosExperiencia}</p>
              <p className="text-sm text-brand-gray-700">anos de experiência</p>
            </div>
            <div>
              <p className="font-heading text-2xl">{config.stats.clientesAtendidos}</p>
              <p className="text-sm text-brand-gray-700">clientes atendidos</p>
            </div>
          </div>
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
                <div className="rounded-2xl border border-brand-gray-100 bg-brand-white p-6 h-full">
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
              <div className="rounded-2xl border border-brand-gray-100 p-6 h-full flex flex-col">
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
              Mais de {config.stats.clientesAtendidos} prestadores de serviço já confiam na DSJ
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

      {/* 9. Depoimentos */}
      <section className="bg-brand-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <Reveal>
            <h2 className="font-heading text-3xl text-center">Quem confia na DSJ</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <Reveal key={d.nome} delay={i * 0.05}>
                <figure className="rounded-2xl bg-brand-white border border-brand-gray-100 p-6 h-full flex flex-col">
                  <blockquote className="text-sm text-brand-gray-700 flex-1">“{d.texto}”</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <img
                      src={d.foto}
                      alt={d.nome}
                      className="w-10 h-10 rounded-full object-cover bg-brand-gray-100"
                    />
                    <div className="text-sm font-medium">
                      {d.nome}
                      <span className="block text-brand-gray-500 font-normal">{d.profissao}</span>
                    </div>
                  </figcaption>
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

      {/* 11. Conteúdos do blog */}
      <section id="conteudos" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <Reveal>
          <h2 className="font-heading text-3xl text-center">Conteúdos para te ajudar</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artigos.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 0.05}>
              <article className="rounded-2xl border border-brand-gray-100 overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] bg-brand-gray-100">
                  <img src={a.imagem} alt={a.titulo} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-lg">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-brand-gray-700 flex-1">{a.resumo}</p>
                  <a href={a.link} className="mt-4 text-sm font-medium underline">
                    Saiba mais
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-brand-black px-6 py-3 font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
          >
            Ir para o blog
          </a>
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
