import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';


export const Dashboard = () => {

    const { nomeUsuario } = useUsuarioLogado()

    const counterRef = useRef(0)
    
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Olá, {nomeUsuario}</h2>
            <p>Contador: {counterRef.current}</p>
            <button onClick={(e) => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Mostrar</button>
            <Link to={"/entrar"}>Entrar</Link>
        </div>

    )
};