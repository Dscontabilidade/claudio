// Depoimentos de clientes. Troque por depoimentos reais quando tiver.

export type Depoimento = {
  nome: string
  profissao: string
  foto: string
  texto: string
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Carla Mendes',
    profissao: 'Designer freelancer',
    foto: '/founder-photo.svg',
    texto: 'Antes eu vivia perdida com prazo de imposto. Hoje recebo um aviso simples no WhatsApp e já sei o que fazer.',
  },
  {
    nome: 'Rafael Souza',
    profissao: 'Personal trainer, MEI',
    foto: '/founder-photo.svg',
    texto: 'Abri meu MEI em poucos dias, sem entender nada de burocracia. A equipe explicou cada passo com paciência.',
  },
  {
    nome: 'Juliana Pires',
    profissao: 'Psicóloga clínica',
    foto: '/founder-photo.svg',
    texto: 'Eu adiava a parte fiscal do consultório porque achava complicado. Com a DSJ ficou simples, entendo tudo agora.',
  },
]
