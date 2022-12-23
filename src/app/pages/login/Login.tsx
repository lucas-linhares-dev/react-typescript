import { Link } from 'react-router-dom';


export const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <Link to={"/pagina-inicial"}>Home</Link>
        </div>
    );
}