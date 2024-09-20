// Define a interface para as propriedades do componente Botao
interface BotaoProps {
  titleBtn: string; // Propriedade que recebe o texto a ser exibido no botão
  onClick: () => void; // Função que será chamada no clique do botão
}

// Define o componente funcional BtnCreateAccount
const BtnCreateAccount: React.FC<BotaoProps> = ({ titleBtn, onClick }) => {
  return (
    <button
      onClick={onClick} // Define a função a ser chamada quando o botão é clicado
      className='
        cursor-pointer
        bg-lime-400
        hover:bg-lime-600
        active:bg-lime-700
        shadow-md
        transition
        duration-200
        w-56
        h-11
        rounded-sm
        shadow-gray-700
      '
    >
      {titleBtn} {/* O texto do botão é definido pela propriedade titleBtn */}
    </button>
  );
}

// Exporta o componente para uso em outros arquivos
export default BtnCreateAccount;
