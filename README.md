# Site da DSJ Contabilidade

Site institucional feito em React + TypeScript + Vite + Tailwind CSS.

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção (os arquivos finais para publicar):

```bash
npm run build
```

Os arquivos prontos ficam na pasta `dist`.

## Onde editar os textos e dados

Quase todo o conteúdo do site fica separado em arquivos dentro de `src/data`, para facilitar a edição:

- `src/data/site.ts`: nome da empresa, número de WhatsApp, e-mail e Instagram.
- `src/data/services.ts`: lista de serviços de contabilidade (títulos, descrições e o que cada serviço resolve).
- `src/data/products.ts`: lista de planilhas e ebooks (nome, preço, imagem e link de checkout).
- `src/data/content.ts`: textos de seções da Home e da página Sobre (públicos atendidos, diferenciais, depoimentos, história da empresa).

## Onde trocar o número de WhatsApp

Abra `src/data/site.ts` e troque o valor de `whatsappNumber` pelo número real, no formato `55` + DDD + número, sem espaços ou símbolos. Exemplo: `5511999999999`.

Esse número é usado automaticamente no botão flutuante de WhatsApp, no rodapé, na Home, na página de Serviços e no formulário de Contato.

## Onde trocar os links de checkout dos produtos

Abra `src/data/products.ts`. Cada produto tem um campo `checkoutUrl`. Troque pelo link real de checkout (Hotmart, Kiwify, Stripe, ou outra plataforma que você usar).

As imagens dos produtos ficam em `public/products`. Para trocar uma imagem, basta substituir o arquivo correspondente ou trocar o caminho no campo `image` de cada produto.

## Estrutura de pastas

```
src/
  components/   componentes compartilhados (Header, Footer, cards, botão de WhatsApp, etc.)
  pages/        cada página do site (Home, Serviços, Produtos, Sobre, Contato)
  data/         textos, serviços e produtos (edite aqui)
  assets/       imagens usadas dentro do código
public/         arquivos públicos (favicon, imagens de produtos, foto da fundadora)
```

## Identidade visual

As cores da marca estão configuradas em `src/index.css`, dentro do bloco `@theme`:

- `brand-black` e `brand-white`: marca institucional (preto e branco).
- `brand-gray-*`: tons de cinza usados em textos e fundos.
- `brand-yellow` e `brand-yellow-dark`: cor de destaque usada na vitrine de produtos digitais.

As fontes (Playfair Display para títulos e DM Sans para textos) também estão configuradas nesse mesmo arquivo.
