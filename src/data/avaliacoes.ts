// Avaliações reais de clientes (ex: Google). Adicione novas conforme forem chegando.

export type Avaliacao = {
  estrelas: number
  tempo: string
  texto: string
  nova?: boolean
}

export const avaliacoes: Avaliacao[] = [
  {
    estrelas: 5,
    tempo: 'Há 4 semanas',
    nova: true,
    texto:
      'O atendimento com a Débora foi excepcional! Ela é muito ágil, responde prontamente, muito educada e gentil. Tem paciência pra sanar todas as dúvidas e tem muita atenção aos detalhes. Fala com simplicidade pra que tudo fique bem entendido, esclarecendo os termos difíceis. Já contratei os serviços contábeis de outro profissional, mas não se comparam ao atendimento que tive aqui. Tá com medo do leão? Deixa com a DSJ Contabilidade que o leão vira gatinho!',
  },
  {
    estrelas: 5,
    tempo: 'Há 4 semanas',
    nova: true,
    texto:
      'Excelente profissional! Muito atenciosa, prestativa e paciente durante todo o processo. Tirou minhas dúvidas, me ajudou com tudo que precisei e tornou algo burocrático muito mais tranquilo. Super recomendo o trabalho dela!',
  },
  {
    estrelas: 5,
    tempo: 'Há 12 semanas',
    texto:
      'A Débora foi muito atenciosa comigo, entendeu todas as minhas demandas e me orientou especificamente em meu caso. Recomendo a todos!',
  },
]
