import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState();
    const [grama, setGrama] = useState();
    const [calorias, setCalorias] = useState();
    const [data, setData] = useState();
    const [refeicao, setRefeicao] = useState();
    const [resultado, setResultado] = useState();
    const [iten, setIten] = useState([]);

    const calcular = () =>{
        let res = Math.pow(grama * calorias);
        setResultado(res);
        let novoIten = { id: iten.length, nome: nome, grama: grama, data: data, refeicao: refeicao, resultado: resultado};
        setIten(novoIten);
        localStorage.setItem(iten);
    }

    const excluir = () => {
        localStorage.removeItem();
    }

    return (
        <div>
            <Header nome='Home' />
            <div className="cadastro">
                <button onClick={() => navigate("/Listagem")}>Ver todas as alimentações</button>
                <h2>Faça a inserção da sua alimentação</h2>
                <label>Nome</label><br />
                <input value={nome} onChange={(e) => setNome(e.target.value)}/><br />
                <label>Quantidade em Gramas</label><br />
                <input value={grama} onChange={(e) => setGrama(e.target.value)}/><br />
                <label>Calorias por Grama</label><br />
                <input value={calorias} onChange={(e) => setCalorias(e.target.value)}/><br />
                <label>Data</label><br />
                <input value={data} onChange={(e) => setData(e.target.value)}/><br />
                <label>Refeição</label><br />
                <input value={refeicao} onChange={(e) => setRefeicao(e.target.value)}/><br />
                <span>{resultado}</span><br/>
                {resultado > 0 && <span>{resultado} calorias para {nome}</span>}
                <button onClick={calcular}>Incluir</button>
                <button onClick={excluir}>Limpar dados</button>
            </div>
        </div>
    );
}

export default Home;