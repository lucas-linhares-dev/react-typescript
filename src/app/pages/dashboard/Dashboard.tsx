import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';


export const Dashboard = () => {

    interface IListItem {
        title: string;
        selected: boolean;
    }

    const [lista, setLista] = useState<IListItem[]>([])

    const { nomeUsuario } = useUsuarioLogado()

    const counterRef = useRef(0)

    const addLista: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter'){
            if(e.currentTarget.value.length === 0) return

            const newValue = e.currentTarget.value

            e.currentTarget.value = ''

            setLista((oldLista) => {
                if(lista.some((listItem) => listItem.title === newValue)){
                    return oldLista
                } 
                else{
                    return [

                        ...oldLista,
                        {
                            title: newValue,
                            selected: false
                        }
        
                        ]
                }
            })
        }

    },[])

    
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Olá, {nomeUsuario}</h2>
            <p>Contador: {counterRef.current}</p>
            <button onClick={(e) => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Mostrar</button>
            <Link to={"/entrar"}>Entrar</Link>
            <hr></hr>
            <input type="text" onKeyDown={addLista} />
            <ul>
                {lista.map((listitem) => {
                    return <li key={listitem.title}>{listitem.title}</li>
                })}
            </ul>
        </div>

    )
};