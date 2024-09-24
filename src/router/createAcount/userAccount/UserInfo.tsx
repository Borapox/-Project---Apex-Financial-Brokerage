// Interface para os dados do usuário
interface UserData {
  nome: string;
  sobrenome: string;
  cpf: string;
  rg: string;
  orgaoExpeditor: string;
  genero: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  senha: string;
}

// Props que o componente UserInfo recebe
interface UserInfoProps {
  userData: UserData; // Objeto que contém os dados do usuário
  setUserData: (data: UserData) => void; // Função para atualizar os dados do usuário
}

const UserInfo: React.FC<UserInfoProps> = ({ userData, setUserData }) => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        {/* Seção Nome e Sobrenome */}
        <div className="flex gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            value={userData.nome} // Valor do input é o estado do nome
            onChange={(e) => setUserData({ ...userData, nome: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            value={userData.sobrenome} // Valor do input é o estado do sobrenome
            onChange={(e) => setUserData({ ...userData, sobrenome: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
        </div>

        {/* Seção Data de Nascimento e CPF */}
        <div className="flex gap-4">
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
            value={userData.cpf} // Valor do input é o estado do CPF
            onChange={(e) => setUserData({ ...userData, cpf: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
          <input
            type="number"
            name="documentoIdentidade"
            placeholder="Número de Identidade - RG"
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
            value={userData.rg} // Valor do input é o estado do RG
            onChange={(e) => setUserData({ ...userData, rg: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
          <input
            type="text"
            name="orgaoExpeditor"
            placeholder="Órgão Expeditor"
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
            value={userData.orgaoExpeditor} // Valor do input é o estado do órgão expedidor
            onChange={(e) => setUserData({ ...userData, orgaoExpeditor: e.target.value })} // Atualiza o estado ao mudar o valor
          />
        </div>

        {/* Seção Gênero e Data de Nascimento */}
        <div className="flex gap-4">
          <label className="flex items-center pl-3 pr-3 justify-between border bg-white text-gray-400 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1">
            Gênero
            <select
              className="outline-none p-2 rounded-sm text-cyan-800"
              value={userData.genero} // Valor do select é o estado do gênero
              onChange={(e) => setUserData({ ...userData, genero: e.target.value })} // Atualiza o estado ao mudar o valor
              required
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="naoBinario">Não Binário</option>
              <option value="transgenero">Transgênero</option>
              <option value="generoFluid">Gênero Fluído</option>
              <option value="agender">Agênero</option>
              <option value="outro">Outro</option>
              <option value="prefiroNaoDizer">Prefiro Não Dizer</option>
            </select>
          </label>

          <input
            type="date"
            name="dataNascimento"
            className="p-3 border text-gray-500 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
            value={userData.dataNascimento} // Valor do input é o estado da data de nascimento
            onChange={(e) => setUserData({ ...userData, dataNascimento: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone Ex (XX) X.XXXX-XXXX"
            maxLength={11}
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            value={userData.telefone} // Valor do input é o estado do telefone
            onChange={(e) => setUserData({ ...userData, telefone: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
        </div>

        {/* Seção E-mail e Senha */}
        <div className="flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md w-full"
            value={userData.email} // Valor do input é o estado do e-mail
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            minLength={8}
            className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md w-full"
            value={userData.senha} // Valor do input é o estado da senha
            onChange={(e) => setUserData({ ...userData, senha: e.target.value })} // Atualiza o estado ao mudar o valor
            required
          />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
