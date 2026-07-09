import { Link, Outlet } from "react-router-dom";

/*
 * Layout principal da aplicação.
 *
 * Tudo o que estiver aqui será exibido em todas as páginas,
 * como o título e o menu de navegação.
 *
 * O componente <Outlet /> representa o local onde cada página
 * (Pessoas, Transações ou Totais) será renderizada.
 */
function Layout() {

    return (

        <div>

            <h1>Controle de Gastos Residenciais</h1>

            <hr />

            <nav>

                <Link to="/">Pessoas</Link>

                {" | "}

                <Link to="/transacoes">Transações</Link>

                {" | "}

                <Link to="/totais">Totais</Link>

            </nav>

            <hr />

            <Outlet />

        </div>

    );

}

export default Layout;