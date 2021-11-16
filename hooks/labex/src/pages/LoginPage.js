import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login`
      )
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={goBack}>Voltar</button>

      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
};

export default LoginPage;
