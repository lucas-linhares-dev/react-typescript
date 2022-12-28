import { useUsuarioLogado } from "../../../shared/hooks";


interface IButtonLoginProps {
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    children: React.ReactNode
}


export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {

    const { nomeUsuario } = useUsuarioLogado()


    return(
        <button type={type} onClick={onClick}>
            { nomeUsuario } {children}
        </button>
    )
}