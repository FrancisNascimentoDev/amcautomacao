# Site Institucional - TechSolutions

Site institucional moderno para empresa de Informática, Segurança Eletrônica e Telecom.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React moderno
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **Vercel** - Deploy e hospedagem

## 📋 Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Página inicial com hero section
- ✅ Seção de serviços
- ✅ Seção sobre a empresa
- ✅ Formulário de contato
- ✅ Menu navegável
- ✅ Footer completo
- ✅ Otimizado para SEO

## 🛠️ Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
O site estará disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Services.tsx    # Serviços oferecidos
│   ├── About.tsx       # Sobre a empresa
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── pages/
│   └── index.tsx       # Página principal
└── styles/
    └── globals.css     # Estilos globais
```

## 🌐 Deploy no Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Clique em "Deploy"

Acesse: [vercel.com](https://vercel.com)

## 📧 Configuração do Formulário de Contato

Para ativar o envio de emails, integre um serviço como:
- SendGrid
- Mailgun
- EmailJS
- Resend

Atualize o arquivo `src/components/Contact.tsx` com sua API.

## 🔧 Personalizações

### Cores e Branding
Edite `tailwind.config.js` para alterar as cores principais.

### Informações da Empresa
Atualize os dados em:
- `src/components/Header.tsx` - Nome e logo
- `src/components/Footer.tsx` - Contatos
- `src/components/About.tsx` - Descrição

## 📝 Licença

MIT

---

Desenvolvido para crescimento digital da sua empresa! 🚀
