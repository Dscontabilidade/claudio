import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

type Filter = 'Todos' | 'Planilha' | 'Ebook'

const filters: Filter[] = ['Todos', 'Planilha', 'Ebook']

export default function Produtos() {
  const [filter, setFilter] = useState<Filter>('Todos')

  const filtered =
    filter === 'Todos' ? products : products.filter((p) => p.type === filter)

  return (
    <>
      <Seo
        title="Produtos digitais | DSJ Contabilidade"
        description="Planilhas e ebooks para organizar a vida financeira e fiscal do seu negócio, criados pela DSJ Contabilidade."
      />

      <section className="bg-brand-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <Reveal>
            <h1 className="font-heading text-3xl sm:text-5xl text-brand-white">
              Produtos digitais
            </h1>
            <p className="mt-4 text-brand-gray-300">
              Planilhas e ebooks simples e práticos para organizar a parte financeira e fiscal
              do seu negócio.
            </p>
          </Reveal>

          <div className="mt-8 flex justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-brand-yellow text-brand-black'
                    : 'bg-brand-gray-700 text-brand-white hover:bg-brand-gray-500'
                }`}
              >
                {f === 'Todos' ? 'Todos' : f === 'Planilha' ? 'Planilhas' : 'Ebooks'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
