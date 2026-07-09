import Pessoas from "./pages/Pessoas";

/*
 * Componente principal da aplicação.
 *
 * Sua função é organizar e renderizar
 * as páginas do sistema.
 */
function App(){

    return(

        <div>

            <h1>Controle de Gastos Residenciais</h1>

            <hr />

            <Pessoas/>

        </div>

    );

}

export default App;