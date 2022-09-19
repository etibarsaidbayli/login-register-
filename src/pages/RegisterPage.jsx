
import { Link } from "react-router-dom"
import SignUp from "../components/SignUp"




function RegisterPage () {
    return (
        <div>
            <h1>Registrasiya</h1>
            <SignUp/>
          <p className="homepage__p">Artiq accountunuz var? <Link to="/login">Daxil ol</Link></p>
        </div>
    )
}

export default RegisterPage