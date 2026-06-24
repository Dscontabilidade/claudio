// Cards da seção "As melhores soluções para o seu negócio".

import type { ComponentType } from 'react'
import { Building2, MessageSquareHeart, ShieldCheck, RefreshCcw } from 'lucide-react'

export type Solucao = {
  titulo: string
  descricao: string
  icon: ComponentType<{ size?: number }>
}

export const solucoes: Solucao[] = [
  {
    titulo: 'Abertura de empresa',
    descricao: 'Abra seu CNPJ com o enquadramento e o CNAE certos, sem complicação.',
    icon: Building2,
  },
  {
    titulo: 'Migração de contabilidade',
    descricao: 'Troque para a DSJ sem dor de cabeça: a gente cuida de toda a transição.',
    icon: RefreshCcw,
  },
  {
    titulo: 'Atendimento humano',
    descricao: 'WhatsApp e reuniões online com contadores de verdade, sem ticket robótico.',
    icon: MessageSquareHeart,
  },
  {
    titulo: 'Garantia de satisfação',
    descricao: 'Um compromisso real com você: se não estiver satisfeito, a gente resolve.',
    icon: ShieldCheck,
  },
]
