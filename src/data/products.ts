// Produtos digitais (planilhas e ebooks). Edite preços, descrições e o link de checkout aqui.

export type Product = {
  slug: string
  name: string
  type: 'Planilha' | 'Ebook'
  description: string
  price: string
  image: string
  checkoutUrl: string // troque pelo link de checkout real (Hotmart, Kiwify, Stripe, etc.)
  featured?: boolean
}

export const products: Product[] = [
  {
    slug: 'planilha-controle-financeiro-mei',
    name: 'Planilha de controle financeiro para MEI',
    type: 'Planilha',
    description:
      'Organize as entradas e saídas do seu negócio em poucos cliques, sem fórmulas complicadas.',
    price: 'R$ 27,00',
    image: '/products/planilha-mei.svg',
    checkoutUrl: 'https://checkout.exemplo.com/planilha-mei',
    featured: true,
  },
  {
    slug: 'planilha-precificacao',
    name: 'Planilha de precificação de serviços',
    type: 'Planilha',
    description:
      'Descubra o preço justo para cobrar pelo seu trabalho, considerando custos e a margem que você quer ganhar.',
    price: 'R$ 37,00',
    image: '/products/planilha-precificacao.svg',
    checkoutUrl: 'https://checkout.exemplo.com/planilha-precificacao',
    featured: true,
  },
  {
    slug: 'ebook-impostos-mei',
    name: 'Ebook: Impostos do MEI sem mistério',
    type: 'Ebook',
    description:
      'Entenda, em linguagem simples, quais impostos você paga como MEI e como evitar problemas com a Receita.',
    price: 'R$ 19,90',
    image: '/products/ebook-impostos-mei.svg',
    checkoutUrl: 'https://checkout.exemplo.com/ebook-impostos-mei',
    featured: true,
  },
  {
    slug: 'ebook-abrir-empresa',
    name: 'Ebook: Guia para abrir sua empresa',
    type: 'Ebook',
    description:
      'Passo a passo completo para escolher o enquadramento certo e abrir seu CNPJ com confiança.',
    price: 'R$ 24,90',
    image: '/products/ebook-abrir-empresa.svg',
    checkoutUrl: 'https://checkout.exemplo.com/ebook-abrir-empresa',
  },
]
