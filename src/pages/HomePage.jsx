
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth'
import { removeUser } from "../store/slices/userSlice";



function HomePage () {

    const dispatch= useDispatch()
 
    const {isAuth,email} = useAuth()
    
    const handleClickRemoveUser = () => {
        dispatch(removeUser())
    }

    return ( 
        <div className="homepage">
        

        {isAuth ?  <div>
            <h1>Xosh gelmisiniz {email}</h1>
                <p className="homepage__p">
                    <button onClick={handleClickRemoveUser}>
                    Chixish et
                    </button></p>
            </div>
        : <p className="homepage__p"><Link to='/register'>Qeydiyyatdan</Link> kecmek</p>}
        { !isAuth && <p className="homepage__p">
            <Link to ='/login'>Girish</Link> etmek
        </p> }
       

        </div>
  
    )
}

export default HomePage