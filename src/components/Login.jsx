import { useDispatch } from "react-redux";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";

import UserForm from "./UserForm";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          })
        );
        setIsError(false);
        navigate("/");
      })
      .catch(setIsError(true));
  };

  const handleUpdateLogin = () => {
    setIsError(false)
  }

  return (
    <>
    {isError ? <p className="homepage__p">Email ve ya parol sehf daxil olunub ! <Link onClick={handleUpdateLogin} to="/login">Birde cehd ele</Link></p>

    : <UserForm title="sign in" handleClick={handleLogin} />
}
     
    </>
  );
}

export default Login;
