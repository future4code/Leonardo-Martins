import React, { useState } from "react";
import { useHistory } from "react-router";
import { goToRegistration } from "../../routes/coordinator";

const LoginPage = () => {
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <div>
      <header>
        <h2>Labeddit</h2>
      </header>
      <hr />
      <h3>Login</h3>
      <form>
        <input placeholder="E-mail" type="email"></input>
        <input placeholder="Senha" type="password"></input>
      </form>
      <button>Fazer login</button>
      <button onClick={() => goToRegistration(history)}>Cadastre-se</button>
    </div>
  );
};

export default LoginPage;
