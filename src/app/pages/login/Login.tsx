import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



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
    }, [email,password])

    return(
        <div>
            <h1>Login</h1>
            <p>Quantidade de caracteres do email: {emailLength}</p>
            <form>
                <label>
                    <span>Email</span>
                    <input value = {email} onChange = {e => setEmail(e.target.value)} type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input value ={password} onChange = {e => setPassword(e.target.value)} type="password" />
                </label>

                <button type='button' onClick={entrar}>Entrar</button>
            </form>

            <Link to={"/pagina-inicial"}>Home</Link>
        </div>
    );
}