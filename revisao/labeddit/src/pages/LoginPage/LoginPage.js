import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { goToRegistration } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  return (
    <div>
      <h3>Login</h3>
      <LoginForm setRightButtonText={setRightButtonText} />
      <Button
        onClick={() => goToRegistration(history)}
        type={"submit"}
        margin={"normal"}
        fullWidth
        variant={"text"}
        color={"primary"}
      >
        Cadastre-se
      </Button>
    </div>
  );
};

export default LoginPage;
