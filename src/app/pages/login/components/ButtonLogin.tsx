import { UsuarioLogadoContext } from "../../../shared/contexts";
import { useContext } from 'react'

interface IButtonLoginProps {
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    children: React.ReactNode
}


export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {

    const { nomeUsuario } = useContext(UsuarioLogadoContext)


    return(
        <button type={type} onClick={onClick}>
            { nomeUsuario } {children}
        </button>
    )
}