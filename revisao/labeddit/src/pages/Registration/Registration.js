import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signup } from "../../services/user";

const Registration = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signup(form, clear, history, setRightButtonText);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"name"}
        />
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
          Fazer Cadastro
        </Button>
      </form>
    </div>
  );
};

export default Registration;
