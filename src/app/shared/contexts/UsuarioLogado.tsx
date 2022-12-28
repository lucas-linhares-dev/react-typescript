import { createContext } from "react";


interface IUsuarioLogadoContextData {
    nomeUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData)


interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: 'Pedro'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}