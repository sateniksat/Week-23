import React, { useEffect, useState } from "react";
import { addUser } from "../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate=useNavigate();
  const dispatch = useDispatch();
  // const storedUser = useSelector(state => state.user.value)

  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value };
    setUser(_user);
  };

  // useEffect(() => {
  //     console.log(storedUser)
  // }, [user])

  const submitAction = () => {
    localStorage.setItem("user", user);
    dispatch(addUser(user));
    navigate("/create");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={inputChangeHandler}
        name="username"
        type="text"
        placeholder="username"
      />
      <br />
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
        placeholder="password"
      />
      <br />
      <button onClick={submitAction}>submit</button>
    </div>
  );
};

export default Login;
