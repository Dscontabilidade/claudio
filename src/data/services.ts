// Lista de serviços de contabilidade. Edite títulos, descrições e ícones aqui.

export type Service = {
  slug: string
  title: string
  shortDescription: string
  problem: string
  icon: 'FileCheck' | 'Building2' | 'Receipt' | 'Calculator' | 'ShieldCheck' | 'TrendingUp'
}

export const services: Service[] = [
  {
    slug: 'abertura-de-empresa',
    title: 'Abertura de empresa',
    shortDescription:
      'Cuidamos de todo o processo para você abrir o CNPJ certo para o seu negócio, sem burocracia.',
    problem:
      'Você quer começar a faturar formalmente, mas não sabe por onde abrir a empresa nem qual enquadramento escolher.',
    icon: 'Building2',
  },
  {
    slug: 'mei',
    title: 'MEI: abertura e gestão',
    shortDescription:
      'Abrimos o seu MEI e acompanhamos as obrigações mensais, para você focar em vender.',
    problem:
      'Você fatura como autônomo e precisa se formalizar, ou já é MEI e quer parar de se preocupar com guias e prazos.',
    icon: 'FileCheck',
  },
  {
    slug: 'regularizacao',
    title: 'Regularização de empresas',
    shortDescription:
      'Colocamos sua empresa em dia com o Fisco, resolvendo pendências e débitos acumulados.',
    problem:
      'Sua empresa está com declarações atrasadas ou dívidas com a Receita e você não sabe por onde resolver.',
    icon: 'ShieldCheck',
  },
  {
    slug: 'simples-nacional',
    title: 'Simples Nacional',
    shortDescription:
      'Calculamos e enviamos suas guias do Simples Nacional, sempre dentro do prazo.',
    problem:
      'Você não quer perder prazo de imposto nem pagar mais do que deveria por erro de cálculo.',
    icon: 'Calculator',
  },
  {
    slug: 'declaracoes',
    title: 'Declarações e obrigações fiscais',
    shortDescription:
      'Entregamos as declarações exigidas pelo governo certinhas e no prazo, sem dor de cabeça para você.',
    problem:
      'Existem várias siglas e prazos de declaração que você nunca sabe se está cumprindo corretamente.',
    icon: 'Receipt',
  },
  {
    slug: 'planejamento-tributario',
    title: 'Planejamento tributário',
    shortDescription:
      'Te ajudamos a planejar impostos e tomar decisões financeiras com clareza, como um amigo especialista.',
    problem:
      'Você precisa tomar uma decisão importante (contratar, mudar de regime, investir) e quer entender o impacto fiscal antes.',
    icon: 'TrendingUp',
  },
  {
    slug: 'transicao-mei-me',
    title: 'Transição de MEI para ME',
    shortDescription:
      'Cuidamos de toda a mudança de enquadramento quando seu faturamento cresce, sem perder prazo nem benefício.',
    problem:
      'Seu MEI está perto do limite de faturamento (ou já passou) e você precisa migrar para ME sem dor de cabeça.',
    icon: 'Building2',
  },
]
