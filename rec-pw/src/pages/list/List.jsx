import React from "react";
import Header from "../../components/header/Header";


const List = () =>{
    

    return(
        <div>
            <Header label="- Listagem"/>
            <button>Todos os Alimentos</button>
            <button>Almoço</button>
            <button>Jantar</button>
            <h2>ULTIMOS CALCULOS REALIZADOS</h2>

            <button>Limpar dados</button>
        </div>
    );

}
export default List;