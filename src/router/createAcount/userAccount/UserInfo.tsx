

const UserInfo = () => {
  return (
    <div>
{/* Formulário */}

<form action="" className="flex flex-col gap-4">

{/* Seção Nome e Sobrenome */}
<div className="flex gap-4">
  <input
    type="text"
    name="nome"
    placeholder="Nome"
    className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
    required
  />
  <input
    type="text"
    name="sobrenome"
    placeholder="Sobrenome"
    className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
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
    required
  />
  
    <input
      type="number"
      name="documentoIdentidade"
      placeholder='Número de Identidade - RG'
      className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
      required
    />
    <input
      type='text'
      name="orgaoExpeditor"
      placeholder='Órgão Expeditor'
      className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
    />
</div>

<div className="flex gap-4">
<input
      type='text'
      name="gender"
      placeholder='Gênero'
      className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
      required
    />
<input
      type='date'
      name='dataNascimento'
      className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1"
      required
      
    />
<input
    type="number"
    name="telefone"
    placeholder="Telefone Ex (XX) X.XXXX-XXXX"
    maxLength={11}
    className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
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
      required
    />

    {/* Seção Senha */}
    <input
      type="password"
      name="senha"
      placeholder="Senha"
      minLength={8}
      className="p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md w-full"
      required
    />
</div>

</form>

    </div>
  )
}

export default UserInfo