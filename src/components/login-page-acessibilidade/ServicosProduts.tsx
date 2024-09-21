
import NavMenu from '../info-card/NavMenu';

const ServicosProdutos = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-800 to-[#17374d] min-h-screen p-6">
      {/* Nav-Menu */}
      <NavMenu />

      <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg p-8 mt-8">
        {/* Cabeçalho da página */}
        <header className="text-center">
          <h1 className="text-4xl text-cyan-800 font-bold mb-4">Serviços e Produtos</h1>
          <p className="text-cyan-600">Conheça os produtos e serviços que oferecemos para ajudá-lo a investir melhor.</p>
        </header>

        {/* Seção de Investimentos */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Investimentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Renda Fixa</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Títulos Públicos (Tesouro Direto)</li>
                <li>CDBs (Certificados de Depósito Bancário)</li>
                <li>LCIs e LCAs (Letras de Crédito Imobiliário e Agronegócio)</li>
                <li>Debêntures</li>
                <li>Fundos de Renda Fixa</li>
              </ul>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Renda Variável</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Ações</li>
                <li>Fundos Imobiliários (FIIs)</li>
                <li>ETFs (Exchange Traded Funds)</li>
                <li>Derivativos (Opções, Futuros)</li>
                <li>BDRs (Brazilian Depositary Receipts)</li>
              </ul>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fundos de Investimento</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Fundos Multimercado</li>
                <li>Fundos de Ações</li>
                <li>Fundos de Previdência</li>
              </ul>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Criptoativos</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Bitcoin</li>
                <li>Altcoins</li>
                <li>Stablecoins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção de Plataformas */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Plataformas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Trading</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Plataforma Web</li>
                <li>Plataforma Desktop</li>
                <li>App Mobile</li>
              </ul>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Análise Técnica</li>
                <li>Análise Fundamentalista</li>
                <li>Relatórios e Research</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção de Educação e Suporte */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Educação e Suporte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Cursos e Webinars</h3>
              <p>Aprenda a investir de maneira inteligente com nossos cursos e webinars ao vivo.</p>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Central de Ajuda</h3>
              <p>Conte com uma central de ajuda completa para tirar suas dúvidas e resolver problemas.</p>
            </div>
          </div>
        </section>

        {/* Seção de Perfil e Conta */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Perfil e Conta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Dados Pessoais</h3>
              <p>Mantenha seus dados pessoais sempre atualizados.</p>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Configurações de Segurança</h3>
              <p>Proteja sua conta com as melhores práticas de segurança.</p>
            </div>
          </div>
        </section>

        {/* Seção de Transações */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Transações</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Depósitos e Saques</h3>
              <p>Gerencie seus depósitos e saques de forma rápida e segura.</p>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Histórico de Ordens</h3>
              <p>Acompanhe o histórico de suas ordens de compra e venda.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicosProdutos;
