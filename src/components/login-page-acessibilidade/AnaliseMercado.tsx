import HeaderCard from '../info-card/HeaderCard';
import SectionsCard from '../info-card/SectionsCard';
import NavMenu from '../info-card/NavMenu';

const AnaliseMercado = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-800 to-[#17374d] min-h-screen p-6">
      {/* Nav-Menu */}
      <NavMenu />

      <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg p-8 mt-8">
        {/* Cabeçalho da página */}
        <header className="text-center">
            <HeaderCard 
              titleText={"Análises de Mercado"} 
              paragraphText={''}
            />
            <HeaderCard 
              titleText={''} 
              paragraphText={"Acompanhe as principais análises e tendências do mercado financeiro."} 
            />
        </header>

        {/* Seção de Análise Técnica */}
        <section className="mt-8 flex">
          <SectionsCard 
            h2Title='Análise Técnica' 
            h3Title='Gráficos e Indicadores'
            pTitle='Utilize gráficos de candlestick, RSI, e MACD para avaliar o momento do mercado.'
          />
          <SectionsCard 
            h2Title=' ' 
            h3Title='Tendências e Padrões'
            pTitle='Identifique tendências de alta, baixa e reversões com base em padrões técnicos.'
          />
        </section>

        {/* Seção de Análise Fundamentalista */}
        <section className="mt-8 flex">
          <SectionsCard 
            h2Title='Análise Fundamentalista' 
            h3Title='Indicadores Financeiros'
            pTitle='Avalie empresas com base em P/L, ROE, Dividend Yield, e outros indicadores fundamentais.'
          />
          <SectionsCard 
            h2Title=' ' 
            h3Title='Relatórios Corporativos'
            pTitle='Leia relatórios anuais, trimestrais e análises de especialistas para tomada de decisão.'
          />
        </section>

        {/* Seção de Relatórios e Research */}
        <section className="mt-8 flex">
          <SectionsCard 
            h2Title='Relatórios e Research' 
            h3Title='Relatórios Diários'
            pTitle='Acompanhe nossos relatórios diários com insights sobre os movimentos do mercado.'
          />
          <SectionsCard 
            h2Title=' ' 
            h3Title='Análises Setoriais'
            pTitle='Entenda como diferentes setores da economia estão se comportando e quais tendências estão surgindo.'
          />
        </section>

        {/* Seção de Ferramentas */}
        <section className="mt-8 flex"> 
          <SectionsCard 
            h2Title='Ferramentas de Análise' 
            h3Title='Simuladores de Investimentos'
            pTitle='Utilize nossos simuladores para testar diferentes estratégias de investimento.'
          />
          <SectionsCard 
            h2Title=' ' 
            h3Title='Calculadoras Financeiras'
            pTitle='Calcule o retorno de seus investimentos com nossas calculadoras personalizadas.'
          />
        </section>

        {/* Seção de Notícias do Mercado */}
        <section className="mt-8 flex">
          <SectionsCard 
            h2Title='Notícias e Informações' 
            h3Title='Cotações em Tempo Real'
            pTitle='Receba cotações atualizadas para acompanhar o desempenho dos seus ativos.'
          />
          <SectionsCard 
            h2Title=' ' 
            h3Title='Calendário Econômico'
            pTitle='Fique atento aos eventos econômicos que podem impactar o mercado, como divulgações de PIB e taxa de juros.'
          />
        </section>

      </div>
    </div>
  );
};

export default AnaliseMercado;
