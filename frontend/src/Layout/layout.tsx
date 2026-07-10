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



        <div className="container mt-5">

            <h1 className="text-center text-primary mb-4">
                Controle de Gastos Residenciais
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">

                <div className="container-fluid">

                    <span className="navbar-brand">
                        Sistema Financeiro
                    </span>

                    <div className="navbar-nav">

                        <Link className="nav-link" to="/">
                            Pessoas
                        </Link>

                        <Link className="nav-link" to="/transacoes">
                            Transações
                        </Link>

                        <Link className="nav-link" to="/totais">
                            Totais
                        </Link>

                    </div>

                </div>

            </nav>

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