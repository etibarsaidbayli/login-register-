import { useDispatch } from "react-redux";
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { setUser } from "../store/slices/userSlice";
import { useAuth } from "../hooks/useAuth";

function SignUp() {
  const dispatch = useDispatch();
  const [isInit,setIsInit] = useState(false)
  const navigate = useNavigate();

  const {email} = useAuth()
  console.log(email)
  const handleRegister = (email,password ) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        dispatch(setUser({
            email:user.email,
            id:user.id,
            token:user.accessToken
        }))
        setIsInit(false)
        navigate('/')
    })
    .catch(setIsInit(true))
 
}

const handleUpdateRegister = () => {
    setIsInit(false)
}

  return (
    <>
    {isInit ? <p className="homepage__p">Bu emailde artiq istifadechi var ! Diger email sechib <Link onClick={handleUpdateRegister} to='/register'>qeydiyyat</Link> ola bilersiniz</p> :  <UserForm
        title='registrasiya'
        handleClick={handleRegister}
  /> }
        
    </>
  
  ) 
}

export default SignUp;
