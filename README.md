<h4 align="center">
    <h1 align="center">
      FeedGet - Backend
    </h1>
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

O feedget é um projeto backend desenvolvido durante a NLW #8 da Rocketseat, com o objetivo de servir uma rota para a [aplicação web](https://github.com/rafinhaa/feedget-web).

## 🚀 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

## 🏁 How to run the project

#### Clone the repository

```bash
git clone https://github.com/rafinhaa/feedget-backend.git
cd feedget-backend

# Install the dependencies
npm install

# Make a copy of '.env.local.example' to '.env.local'
cp .env.local.example .env.local

# Start the application
npm run dev
```

## ℹ️ Info

### Rotas

```ts
  POST: /feedbacks
  body: {
    type: string;
    comment: string;
    screenshot?: string;
  }
```

## 📝 License

[MIT](LICENSE)

**Free Software, Hell Yeah!**
