import { FileCheck, Building2, Receipt, Calculator, ShieldCheck, TrendingUp } from 'lucide-react'
import type { Service } from '../data/services'

const icons = {
  FileCheck,
  Building2,
  Receipt,
  Calculator,
  ShieldCheck,
  TrendingUp,
}

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]

  return (
    <div className="lift-on-hover rounded-2xl border border-brand-gray-100 p-6 bg-brand-white">
      <div className="w-11 h-11 rounded-full bg-brand-gray-50 flex items-center justify-center text-brand-black">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-heading text-lg">{service.title}</h3>
      <p className="mt-2 text-sm text-brand-gray-700">{service.shortDescription}</p>
    </div>
  )
}
