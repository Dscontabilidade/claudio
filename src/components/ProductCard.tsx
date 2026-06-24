import type { Produto } from '../data/produtos'

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <div className="relative flex flex-col rounded-2xl bg-brand-black overflow-hidden border border-brand-gray-700">
      {produto.maisVendido && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-brand-white text-brand-black text-xs font-medium px-3 py-1">
          Mais vendido
        </span>
      )}
      <div className="aspect-[4/3] bg-brand-gray-700">
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 text-brand-white">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-gray-300">
          {produto.tipo}
        </span>
        <h3 className="mt-1 font-heading text-lg">{produto.nome}</h3>
        <p className="mt-2 text-sm text-brand-gray-300 flex-1">{produto.descricao}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">{produto.preco}</span>
          <a
            href={produto.linkCompra}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-white px-4 py-2 text-sm font-semibold text-brand-black hover:bg-brand-gray-300 transition-colors"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </div>
  )
}
