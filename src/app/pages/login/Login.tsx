import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';
import { ButtonLogin } from './components/ButtonLogin';
import { InputLogin } from './components/InputLogin';


export const Login = () => {

    const { nomeUsuario, logout } = useUsuarioLogado()


    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    useEffect(() => {

        console.log(email)

    },[email])



    useEffect(() => {

        console.log(password)

    }, [password])



    const emailLength = useMemo(() => {
        return email.length
    }, [email])


    const entrar = useCallback(() => {
        console.log(email)
        console.log(password)

        if(inputPasswordRef.current !== null){
            inputPasswordRef.current.value = ''
        }

        window.alert(`Logou \n E-mail: ${email} \n Password: ${password}`)
        
    }, [email,password])

    return(
        <div>
            <h1>Login</h1>
            <h2>Olá, {nomeUsuario} </h2>
            <p>Quantidade de caracteres do email: {emailLength}</p>
            <form>
                <InputLogin
                    label='E-mail'
                    value={email}
                    type='email'
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter= {() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label='Password'
                    type='password'
                    ref={inputPasswordRef}
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />
    

                <ButtonLogin type='button' onClick={entrar}>
                    Entrar
                </ButtonLogin>

                <ButtonLogin type='button' onClick={entrar}>
                    Entrar 2
                </ButtonLogin>

                <ButtonLogin type='button' onClick={logout}>
                    Logout
                </ButtonLogin>
                
            </form>

            <Link to={"/pagina-inicial"}>Home</Link>
        </div>
    );
}