import React from "react";
import Loginform from "../components/LoginForm";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NAVIGATION_ROUTE } from "../constants";
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const onSumbitHandler = (values) => {
    const loginData = [
      ...users,
      { email: values.email, password: values.password },
    ];
    setUsers(loginData);
    dispatch(login(values));
    navigate(NAVIGATION_ROUTE.homepage);
  };

  return (
    <div>
        <Loginform onSumbitHandler={onSumbitHandler}></Loginform>
    </div>
  );
}

export default LoginPage;
