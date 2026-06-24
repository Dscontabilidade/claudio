// Perfis de prestadores de serviço atendidos pela DSJ.
// Adicione ou remova itens deste array para mudar os cards da seção "Para quem é".

export type Nicho = {
  titulo: string
  descricao: string
  link: string
}

export const nichos: Nicho[] = [
  {
    titulo: 'Profissionais da saúde',
    descricao:
      'Médicos, dentistas, psicólogos, nutricionistas e fisioterapeutas que precisam de uma contabilidade que entenda a área.',
    link: '#contato',
  },
  {
    titulo: 'Consultores e coaches',
    descricao:
      'Quem vende conhecimento e experiência, e precisa de clareza fiscal para crescer sem dor de cabeça.',
    link: '#contato',
  },
  {
    titulo: 'Profissionais de TI e devs',
    descricao:
      'Desenvolvedores e freelancers de tecnologia que faturam para clientes do Brasil e do exterior.',
    link: '#contato',
  },
  {
    titulo: 'Engenheiros e arquitetos',
    descricao:
      'Profissionais que prestam serviço por projeto e precisam de organização fiscal entre um contrato e outro.',
    link: '#contato',
  },
  {
    titulo: 'Marketing e criativos',
    descricao:
      'Designers, social medias e copywriters que vivem de prestar serviço para várias marcas ao mesmo tempo.',
    link: '#contato',
  },
  {
    titulo: 'Representantes e autônomos',
    descricao:
      'Representantes comerciais e autônomos em geral que precisam de alguém de confiança cuidando da parte fiscal.',
    link: '#contato',
  },
]
