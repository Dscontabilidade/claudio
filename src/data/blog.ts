// Artigos de exemplo do blog. Troque por posts reais ou puxe de um CMS depois.

export type Artigo = {
  titulo: string
  resumo: string
  imagem: string
  link: string
}

export const artigos: Artigo[] = [
  {
    titulo: 'Como escolher o enquadramento certo para abrir sua empresa',
    resumo: 'MEI, Simples Nacional ou Lucro Presumido? Entenda a diferença antes de abrir o CNPJ.',
    imagem: '/products/ebook-abrir-empresa.svg',
    link: '#',
  },
  {
    titulo: 'Guia rápido das obrigações fiscais de quem presta serviço',
    resumo: 'Veja quais guias e declarações você precisa acompanhar todo mês para não cair na malha fina.',
    imagem: '/products/ebook-impostos-mei.svg',
    link: '#',
  },
  {
    titulo: 'Como precificar seu serviço sem ficar no vermelho',
    resumo: 'Um passo a passo simples para colocar custos, impostos e margem na sua conta antes de cobrar.',
    imagem: '/products/planilha-precificacao.svg',
    link: '#',
  },
]
