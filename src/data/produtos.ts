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
    id: 'planilha-controle-financeiro',
    tipo: 'Planilha',
    nome: 'Planilha de controle financeiro',
    descricao: 'Organize entradas e saídas do seu negócio em poucos cliques, sem fórmulas complicadas.',
    preco: 'R$ 27,00',
    imagem: '/products/planilha-mei.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/planilha-controle-financeiro',
    maisVendido: true,
  },
  {
    id: 'planilha-precificacao',
    tipo: 'Planilha',
    nome: 'Planilha de precificação de serviços',
    descricao: 'Descubra o preço justo para cobrar pelo seu trabalho, considerando custos e a margem que você quer ganhar.',
    preco: 'R$ 37,00',
    imagem: '/products/planilha-precificacao.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/planilha-precificacao',
  },
  {
    id: 'ebook-impostos-mei',
    tipo: 'Ebook',
    nome: 'Impostos do MEI sem mistério',
    descricao: 'Entenda, em linguagem simples, quais impostos você paga como MEI e como evitar problemas com a Receita.',
    preco: 'R$ 19,90',
    imagem: '/products/ebook-impostos-mei.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/ebook-impostos-mei',
  },
  {
    id: 'ebook-abrir-empresa',
    tipo: 'Ebook',
    nome: 'Guia para abrir sua empresa',
    descricao: 'Passo a passo completo para escolher o enquadramento certo e abrir seu CNPJ com confiança.',
    preco: 'R$ 24,90',
    imagem: '/products/ebook-abrir-empresa.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/ebook-abrir-empresa',
  },
  {
    id: 'guia-regularizacao',
    tipo: 'Guia',
    nome: 'Guia de regularização fiscal',
    descricao: 'Um roteiro simples para colocar declarações e guias atrasadas em dia, sem complicação.',
    preco: 'R$ 22,90',
    imagem: '/products/ebook-impostos-mei.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/guia-regularizacao',
  },
  {
    id: 'template-contrato-servico',
    tipo: 'Template',
    nome: 'Template de contrato de prestação de serviço',
    descricao: 'Modelo pronto para editar e usar com seus clientes, com as cláusulas essenciais já incluídas.',
    preco: 'R$ 29,90',
    imagem: '/products/planilha-precificacao.svg',
    linkCompra: 'https://kiwify.com.br/SEU-LINK/template-contrato',
  },
]
