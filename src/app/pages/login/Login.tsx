import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


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

        window.alert('Logou')
        
    }, [email,password])

    return(
        <div>
            <h1>Login</h1>
            <p>Quantidade de caracteres do email: {emailLength}</p>
            <form>
                <label>
                    <span>Email</span>
                    <input value = {email} onChange = {e => setEmail(e.target.value)} type="email" ref={inputEmailRef} onKeyDown={e => e.key == 'Enter' ? inputPasswordRef.current?.focus() : undefined}/>
                </label>
                <label>
                    <span>Password</span>
                    <input value ={password} onChange = {e => setPassword(e.target.value)} type="password" ref={inputPasswordRef} onKeyDown={e => e.key == 'Enter' ? inputSubmitRef.current?.focus() : undefined } />
                </label>

                <button type='button' onClick={entrar} ref={inputSubmitRef}>Entrar</button>
            </form>

            <Link to={"/pagina-inicial"}>Home</Link>
        </div>
    );
}