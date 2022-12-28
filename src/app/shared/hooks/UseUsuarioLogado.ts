import { UsuarioLogadoContext } from "../contexts"
import { useContext } from 'react'


export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext)
    return context
}