import NavMenu from '../info-card/NavMenu';

const CentralAtendimento = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-800 to-[#17374d] min-h-screen p-6">
      {/* Nav-Menu */}
      <NavMenu />

      <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg p-8 mt-8">
        {/* Cabeçalho da página */}
        <header className="text-center">
          <h1 className="text-4xl text-cyan-800 font-bold mb-4">Central de Atendimento</h1>
          <p className="text-cyan-600">Estamos aqui para te ajudar. Entre em contato com a nossa equipe de suporte!</p>
        </header>

        {/* Seção de Contatos */}
        <section className="mt-8">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Entre em Contato</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Atendimento por Telefone</h3>
              <p>Ligue para nosso atendimento: <strong>0800-123-456</strong></p>
              <p className="mt-2">Horário: Segunda a Sexta, 08:00 - 18:00</p>
            </div>
            <div className="bg-cyan-600 text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Atendimento por E-mail</h3>
              <p>Envie-nos um e-mail para: <strong>suporte@corretora.com</strong></p>
              <p className="mt-2">Respondemos em até 24 horas úteis.</p>
            </div>
          </div>
        </section>

        {/* Formulário de Atendimento */}
        <section className="mt-12">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Solicite Atendimento</h2>
          <form className="bg-cyan-600 p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-white">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="text-white">Mensagem</label>
              <textarea
                id="message"
                className="mt-2 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="Descreva o motivo do seu contato"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-cyan-800 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors"
            >
              Enviar Solicitação
            </button>
          </form>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl text-cyan-800 font-semibold mb-4">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="bg-white border border-cyan-300 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-cyan-600">Como altero meus dados cadastrais?</h3>
              <p className="mt-2 text-cyan-600">Você pode alterar seus dados diretamente no painel de controle da sua conta, ou entrar em contato com nosso suporte via telefone ou e-mail.</p>
            </div>
            <div className="bg-white border border-cyan-300 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-cyan-600">Qual o horário de funcionamento do atendimento?</h3>
              <p className="mt-2 text-cyan-600">Nosso atendimento funciona de segunda a sexta, das 08:00 às 18:00.</p>
            </div>
            <div className="bg-white border border-cyan-300 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-cyan-600">Como recupero minha senha?</h3>
              <p className="mt-2 text-cyan-600">Você pode solicitar a recuperação de senha na página de login, clicando em "Esqueci minha senha".</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CentralAtendimento;
