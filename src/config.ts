// Configuração central do site. Troque aqui número de WhatsApp, redes sociais,
// dados de contato e os números mostrados na faixa de credibilidade.

export const config = {
  brand: {
    name: 'DSJ Contabilidade',
    tagline: 'Contabilidade digital para prestadores de serviço',
  },

  // Número de WhatsApp com código do país (55) e DDD, sem espaços ou símbolos.
  whatsapp: {
    number: '5500000000000',
    defaultMessage: 'Olá! Vim pelo site da DSJ e quero falar com um contador.',
  },

  contato: {
    email: 'contato@dsjcontabilidade.com.br',
    cidade: 'Atendimento 100% online para todo o Brasil',
    crc: 'CRC 0000000/O-0',
  },

  social: {
    instagram: 'https://instagram.com/dsjcontabilidade',
  },

  // Foto usada na seção principal (hero). Troque o arquivo em public/ e o caminho aqui.
  fotoPerfil: '/founder-photo.svg',

  // Link configurável do material gratuito (PDF, página de captura, etc).
  leadMagnet: {
    titulo: 'Guia do prestador de serviço para manter o CNPJ regularizado',
    descricao:
      'Um material direto ao ponto: o que pagar, quando declarar e como evitar problemas com a Receita.',
    linkDownload: '#',
  },
}

export function whatsappLink(message: string = config.whatsapp.defaultMessage) {
  const text = encodeURIComponent(message)
  return `https://api.whatsapp.com/send?phone=${config.whatsapp.number}&text=${text}`
}
