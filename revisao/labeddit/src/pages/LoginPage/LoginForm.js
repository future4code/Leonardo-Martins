import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/user";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, history, setRightButtonText);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          type={"submit"}
          margin={"normal"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Fazer login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
