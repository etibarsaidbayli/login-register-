import { Link } from "react-router-dom"

import Login from "../components/Login"




function LoginPage () {
    return (
        <div>
             <h1>Login page</h1>
             <Login/>
             <p>
                <Link to="/register">Registrasiya ol</Link>
            </p>
        </div>
       
    )
}

export default LoginPage