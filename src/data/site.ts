// Informações gerais da empresa. Edite aqui para atualizar contatos e textos do rodapé.

export const site = {
  name: 'DSJ Contabilidade',
  tagline: 'Simplificar a contabilidade é o nosso foco',
  whatsappNumber: '5500000000000', // troque pelo número real, com código do país (55) e DDD
  email: 'contato@dsjcontabilidade.com.br',
  instagram: 'https://instagram.com/dsjcontabilidade',
  city: 'Atendimento 100% online para todo o Brasil',
}

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}
