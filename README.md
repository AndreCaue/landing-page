# My Portfolio | André Cauê 🚀

Bem-vindo ao repositório do meu portfólio pessoal. Construí este espaço para apresentar meus projetos, habilidades técnicas e um pouco da minha trajetória profissional. Desenvolvido com foco em alta performance, usabilidade aprimorada e animações fluidas.

## 🌟 O Projeto

O portfólio atua como um cartão de visita interativo digital. Ao navegar por ele, você experimentará:
- **Design Moderno:** Utilização de modo escuro por padrão, com tons curados que garantem conforto e destaque.
- **Animações e Micro-interações:** Feitas sob medida utilizando `Framer Motion` para encantar o usuário sem prejudicar o desempenho.
- **Responsividade Total:** Adaptado perfeitamente para Desktop, Tablets e Mobile.
- **Arquitetura Escalável:** Código componentizado, separando UI, lógica (lib) e dados (data) fluindo organicamente juntamente dos recursos modernos do Next.js (App Router).

## 🛠️ Tecnologias Utilizadas

Este projeto foi forjado utilizando algumas das melhores e mais recentes ferramentas do ecossistema Front-end:

- **[Next.js 16](https://nextjs.org/)** - O framework para renderização robusta e SEO.
- **[React 19](https://react.dev/)** - Biblioteca base de UI.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset para segurança de tipos e previsibilidade do código.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework utilitário de CSS com as mais novas diretivas de build.
- **[Framer Motion](https://www.framer.com/motion/)** - Para todas as animações declarativas.
- **[Lucide React](https://lucide.dev/)** - Iconografia limpa e performática.

## 🚀 Como Executar Localmente

Siga os passos abaixo caso deseje rodar a aplicação em seu ambiente local:

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (Versão LTS recomendada: 18+ ou 20+)
- Gerenciador de pacotes (`npm`, `yarn`, `pnpm` ou `bun`)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AndreCaue/NOME_DO_REPO_AQUI.git
```

2. Entre no diretório do projeto:
```bash
cd my-port
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado. Edite iterativamente, pois a página refletirá atualizações automaticamente ("hot reload").

## 📁 Estrutura do Projeto

Neste projeto utilizamos *Clean Architecture* adaptada para ecossistema Next.js:

* `app/`: Contém arquivos vitais de roteamento, meta rotas e layouts isolados (`page.tsx`, `layout.tsx`, `globals.css`).
* `components/`: Coleção dos componentes modulares do site:
  * `new/`: Elementos atômicos ou utilitários granulares (Botões, Floating Action Buttons - FAB, FlipCards estilizados).
  * `sections/`: Componentes compostos que arquitetam seções inteiras (`Hero`, `Timeline`, `Projects`).
* `data/`: Estrutura simulada para alimentar o mapeamento de projetos dinamicamente, isolando os dados brutos da visão.
* `lib/`: Scripts lógicos, conversores de formatos e variantes puras configuradas do Framer Motion (`animation.ts`).

## 📫 Contato & Conexões

Interessado em conversar sobre tecnologias Front-end, novas oportunidades pontuais, ou colaborar mutuamente? Você possuí essas opções de engajamento:

- Envie uma mensagem no botão de **Email** fixo à direita da tela (`andrecaue@outlook.com`).
- Sinta-se livre para acessar meu [GitHub](https://github.com/AndreCaue)
- Entre em contato via WhatsApp / Telegram pelas redes declaradas na interface web.

---

*Desenvolvido orgulhosamente por André Cauê. Elevando ideias criativas nas entrelinhas do código!* ✨
