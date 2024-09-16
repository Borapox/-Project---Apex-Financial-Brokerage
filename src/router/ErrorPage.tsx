// Importação do Link do react-router-dom
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="bg-gradient-to-t from-cyan-700 to-cyan-500 bg-no-repeat h-screen flex justify-center items-center flex-col text-cyan-600">
        <div className="bg-white rounded-xl w-3/4 h-[800px] flex flex-col justify-end items-center p-10 bg-custom-pattern bg-contain bg-center bg-no-repeat shadow-custom-blue">
          
          <h2 className="text-4xl font-semibold text-cyan-600 mb-4">Page Not Found</h2>
          <p className="text-lg text-cyan-500 text-center">
              Desculpe, a página que você procura não existe. Pode ter sido movida ou excluída.
          </p>
          
          {/* Botão estilizado */}
          <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
            <Link to={"/"} className="no-underline text-white">Página Inicial</Link>
          </button>
  
        </div>
  
        <a href="https://www.freepik.com/free-vector/page-found-concept-illustration_7887410.htm#query=404%20page%20png&position=0&from_view=keyword&track=ais_hybrid&uuid=6a0cf2e0-e807-47ff-a08b-e713c3777751">
          Image by storyset on Freepik
        </a>
      </div>
    );
  }
  
  export default ErrorPage;
