/** @type {import('tailwindcss').Config} */
export default {
  // Array de caminhos onde o Tailwind deve procurar por classes CSS
  content: [
    // Arquivo HTML principal
    "./index.html",
    // Todos os arquivos JavaScript, TypeScript, JSX e TSX dentro da pasta src e suas subpastas
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Extensão do tema padrão do Tailwind
    extend: {
      // Adicionando um padrão de fundo personalizado
      backgroundImage: {
        // Nome do padrão de fundo que será utilizado nas classes de utilitários
        'custom-pattern': "url('/src/assets/Error_404.jpg')",        
      },
    },
  },
  // Lista de plugins adicionais do Tailwind (nenhum plugin está sendo usado no momento)
  plugins: [],
}
