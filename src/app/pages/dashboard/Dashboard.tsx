import { useRef } from 'react';
import { Link } from 'react-router-dom';


export const Dashboard = () => {

    const counterRef = useRef(0)
    
    return(
        <div>
            <h1>Dashboard</h1>
            <p>Contador: {counterRef.current}</p>
            <button onClick={(e) => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Mostrar</button>
            <Link to={"/entrar"}>Entrar</Link>
        </div>

    )
};