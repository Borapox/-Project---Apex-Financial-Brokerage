import { useState } from "react"


const url = "http://localhost:3000/users";

interface UserDate {
  nome: string,
  sobrenome: string,
  cpf: number,
  rg: number,
  orgaoExpeditor: string,
  genero: string,
  dataNascimento: Date,
  telefone: number,
  email: string,
  password: string

}

const UserInfo = () => {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [orgaoExpeditor, setOrgaoExpeditor] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const userDate: UserDate = {
        nome,
        sobrenome,
        cpf: Number(cpf),
        rg: Number(rg),
        orgaoExpeditor,
        genero,
        dataNascimento: new Date(dataNascimento),
        telefone: Number(telefone),
        email,
        password
      };

      try{
        const res = await  fetch(url, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(userDate)
        });

        if (!res.ok) {
          throw new Error("Erro ao cadastrar usuário");
        };

        const result = await res.json();
        console.log("Usuário cadastrado com sucesso:", result);
        
        setNome("");
        setSobrenome("");
        setCpf("");
        setRg("");
        setGenero("");
        setDataNascimento("");
        setTelefone("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Erro:", error);
      };

    }


  return (
    <div>
        {/* Formulário */}

        <form onSubmit={handleSubmit } className="flex flex-col gap-4">

            {/* Seção Nome e Sobrenome */}
            <div className="flex gap-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              
              <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
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
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              
                <input
                  type="number"
                  name="documentoIdentidade"
                  placeholder='Número de Identidade - RG'
                  className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  required
                />
                <input
                  type='text'
                  name="orgaoExpeditor"
                  placeholder='Órgão Expeditor'
                  className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
                  value={orgaoExpeditor}
                  onChange={(e) => setOrgaoExpeditor(e.target.value)}
                />
            </div>

            <div className="flex gap-4">
              <label className=" flex items-center pl-3 pr-3 justify-between border bg-white text-gray-400 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1">
                Gênero
                <select
                    // value={genero}
                    // onChange={(e) => setGenero(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                  >
                    <option value="">
                      Selecione
                    </option>

                    <option value={'masculino'}>
                      Masculino
                    </option>
                    <option value={'feminino'}>
                      Feminino
                    </option>
                    <option value={'naoBinario'}>
                      Não Binário
                    </option>
                    <option value={'transgenero'}>
                      Transgênero
                    </option>
                    <option value={'generoFluid'}>
                      Gênero Fluído
                    </option>
                    <option value={'agender'}>
                      Agênero
                    </option>
                    <option value={'outro'}>
                      Outro
                    </option>
                    <option value={'prefiroNaoDizer'}>
                      Prefiro Não Dizer
                    </option>

                  </select>
              </label>

              

            <input
                  type='date'
                  name='dataNascimento'
                  className="p-3 border text-gray-500 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  required
                />
            <input
                type="number"
                name="telefone"
                placeholder="Telefone Ex (XX) X.XXXX-XXXX"
                maxLength={11}
                className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-4">
                {/* Seção E-mail */}
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                {/* Seção Senha */}
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  minLength={8}
                  className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </div>
      </form>

    </div>
  )
}

export default UserInfo