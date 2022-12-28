import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputLogin } from './components/InputLogin';


export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputSubmitRef = useRef<HTMLButtonElement>(null);

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
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />
    

                <button type='button' onClick={entrar} ref={inputSubmitRef}>Entrar</button>
            </form>

            <Link to={"/pagina-inicial"}>Home</Link>
        </div>
    );
}