import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContainerForm, ContainerFormInfo, ContainerLoginForm, Form } from "../../components/component-with-form";
import { login } from "../../redux/state/user";
import { privateRoutes, PublicRoutes } from "../../routes";
import { error, succes } from "../../utils/alertFunctions/alertFunction";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(inputValue));
    if (userState.logged) {
      succes("Verificado correctamente");
      setTimeout(() => {
        navigate(`/${privateRoutes.PRIVATE}`, { replace: true });
      }, 2000);
    } else {
      error("Credenciales incorrectas");
    }
  };
  return (
    <ContainerLoginForm>
      <ContainerForm>
        <h3>Inicia sesión</h3>
        <Form onSubmit={handleSubmit}>
          <input placeholder="Correo" type="email" onChange={handleInputChange} name="email" value={inputValue.email} />
          <input placeholder="Contraseña" type="password" onChange={handleInputChange} name="password" value={inputValue.password} />
          <button>Iniciar sesión</button>
        </Form>
        <ContainerFormInfo>
          <p>¿Primera vez en Netflix?</p>
          {!userState.id ? <Link to={PublicRoutes.SIGNUP}>Suscríbete ahora.</Link> : null}
        </ContainerFormInfo>
      </ContainerForm>
      <Toaster />
    </ContainerLoginForm>
  );
};

export default Login;
