import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { about } from '../data/content'

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a DSJ Contabilidade"
        description="Conheça a história da DSJ Contabilidade, nossa missão de simplificar a contabilidade e o atendimento online para todo o Brasil."
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Reveal>
          <h1 className="font-heading text-3xl sm:text-5xl">{about.title}</h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 space-y-4 text-brand-gray-700">
          {about.history.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl bg-brand-gray-50 p-6 sm:p-8">
            <h2 className="font-heading text-xl">Nossa missão</h2>
            <p className="mt-2 text-brand-gray-700">{about.mission}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <h2 className="font-heading text-xl">Quem está por trás da DSJ</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-full bg-brand-gray-100 flex-shrink-0 overflow-hidden">
              <img
                src="/founder-photo.svg"
                alt={`Foto de ${about.founderName}, fundadora da DSJ Contabilidade`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-lg">{about.founderName}</p>
              <p className="mt-2 text-brand-gray-700">{about.founderBio}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
