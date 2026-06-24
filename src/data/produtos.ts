// Produtos digitais à venda. Edite preço, descrição e link de compra (ex: Kiwify) aqui.

export type Produto = {
  id: string
  tipo: 'Ebook' | 'Planilha' | 'Guia' | 'Template'
  nome: string
  descricao: string
  preco: string
  imagem: string
  linkCompra: string
  maisVendido?: boolean
}

export const produtos: Produto[] = [
  {
    id: 'ebook-mei',
    tipo: 'Ebook',
    nome: 'Ebook MEI',
    descricao: 'Entenda, em linguagem simples, quais impostos você paga como MEI e como evitar problemas com a Receita.',
    preco: 'R$ 19,90',
    imagem: '/products/ebook-impostos-mei.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/ebook-mei',
    maisVendido: true,
  },
  {
    id: 'planilha-mei',
    tipo: 'Planilha',
    nome: 'Planilha para MEI',
    descricao: 'Organize entradas e saídas do seu MEI em poucos cliques, sem fórmulas complicadas.',
    preco: 'R$ 27,00',
    imagem: '/products/planilha-mei.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/planilha-mei',
  },
  {
    id: 'planilha-fluxo-de-caixa',
    tipo: 'Planilha',
    nome: 'Planilha de fluxo de caixa',
    descricao: 'Acompanhe entradas, saídas e o saldo do seu negócio mês a mês, sem complicação.',
    preco: 'R$ 27,00',
    imagem: '/products/planilha-precificacao.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/planilha-fluxo-de-caixa',
  },
]
