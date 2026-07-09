import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/layout";

import Pessoas from "./pages/Pessoas";
import Transacoes from "./pages/Transacoes";
import Totais from "./pages/Totais";

/*
 * Componente principal da aplicação.
 *
 * Configura todas as rotas do sistema.
 */
function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Pessoas />} />

                    <Route
                        path="transacoes"
                        element={<Transacoes />}
                    />

                    <Route
                        path="totais"
                        element={<Totais />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;