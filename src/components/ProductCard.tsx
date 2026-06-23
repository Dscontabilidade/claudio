import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-2xl bg-brand-black overflow-hidden border border-brand-gray-700">
      <div className="aspect-[4/3] bg-brand-gray-700">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 text-brand-white">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-yellow">
          {product.type}
        </span>
        <h3 className="mt-1 font-heading text-lg">{product.name}</h3>
        <p className="mt-2 text-sm text-brand-gray-300 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">{product.price}</span>
          <a
            href={product.checkoutUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-brand-black hover:bg-brand-yellow-dark transition-colors"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  )
}
