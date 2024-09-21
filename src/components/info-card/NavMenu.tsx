import { Link } from "react-router-dom"

const NavMenu = () => {
  return (
    <nav className="w-full flex justify-end gap-5 uppercase text-sm text-gray-400 font-bold mt-4">
        <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/central" className="hover:text-gray-300">
            Central de Atendimento
          </Link>
          <Link to="/servicos" className="hover:text-gray-300">
            Serviços e Produtos
          </Link>
          <Link to="/analise" className="hover:text-gray-300">
            Análises de Mercado
          </Link>
      </nav>
  )
}

export default NavMenu