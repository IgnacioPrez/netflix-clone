import { useId, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContainerForm, ContainerFormInfo, ContainerLoginForm, Form } from "../../components/component-with-form";
import { login } from "../../redux/state/user";
import { privateRoutes} from "../../routes";
import { error, succes } from "../../utils/alertFunctions/alertFunction";

const Login = () => {
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();
  const userId = useId();

  const checkForm = (emailInput, passwordInput) => {
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    let validate = false
    const isEmailValid = (emailValue) => EMAIL_REGEX.test(emailValue);
    const isPasswordValid = (passwordValue) => PASSWORD_REGEX.test(passwordValue);
    const isEmpty = (value) => !value;
    if (isEmpty(emailInput)) {
      setErrorEmail("El correo es obligatorio");
      return
    }
    else  if (!isEmailValid(emailInput)) {
      setErrorEmail("Correo Invalido");
      return

    }

    else if (isEmpty(passwordInput)) {
      setErrorPassword("La contraseña es obligatoria");
    }
    else if (!isPasswordValid(passwordInput)) {
      setErrorPassword("La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo.");
    } 
    else {
      setErrorEmail("");
      setErrorPassword("");
      validate = true
    }
    return validate
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new window.FormData(e.target));
    const isValidate = checkForm(email, password);
    if(isValidate){
      dispatch(
        login({
          id: userId,
          email: email,
          password: password,
        }))
      succes("Verificado correctamente");
      setTimeout(() => {
        navigate(`/${privateRoutes.PRIVATE}`, { replace: true });
      }, 2000);
    }
    else {
      error("La contraseña debe contener más de 8 caracteres, una Mayuscula y un simbolo")
    }
  };
  return (
    <ContainerLoginForm>
      <ContainerForm>
        <h3>Inicia sesión</h3>
        <Form onSubmit={handleSubmit}>
          <input placeholder="Correo" type="email" name="email" />
          {errorEmail&&<span>{errorEmail}</span>}
          <input placeholder="Contraseña" type="password" name="password" />
          {errorPassword&&<span>{errorPassword}</span>}
          <button>Iniciar sesión</button>
        </Form>
        <ContainerFormInfo>
          <p>¿Primera vez en Netflix?</p>
          <p>Suscribete</p>
        </ContainerFormInfo>
      </ContainerForm>
      <Toaster />
    </ContainerLoginForm>
  );
};

export default Login;
