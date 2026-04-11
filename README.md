# samba-innovations

Site institucional da **Samba Innovations** — landing page e vitrine dos produtos da empresa.

## Sobre

Aplicação Next.js somente de frontend (sem banco de dados, sem autenticação). Exibe informações institucionais, portfólio de produtos e contato.

- **Stack**: Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Recharts
- **Porta**: 3000
- **Banco**: nenhum (UI only)
- **Auth**: nenhuma

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
```

## Deploy

Containerizado via `Dockerfile.innovations` no orquestrador principal.
