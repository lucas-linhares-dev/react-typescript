import { createContext } from "react";
import { useCallback, useState, useEffect } from 'react'


interface IUsuarioLogadoContextData {
    nomeUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData)


interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {

    const [nome, setNome] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setNome('Lucas')
        }, 1000)
    })

    const handleLogout = useCallback(() => {
        console.log('Usuário deslogado.')
    }, [])

    return(
        <UsuarioLogadoContext.Provider value={{nomeUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}