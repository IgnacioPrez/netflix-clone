import { useId } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/state/user";
import { PublicRoutes } from "../../routes";
import { error, succes } from "../../utils/alertFunctions/alertFunction";
import { Toaster } from "react-hot-toast";
import { ContainerForm, ContainerLoginForm, Form } from "../../components/component-with-form";
import { useValidate } from "../../hooks";


const SignUp = () => {
  const userId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value, setValue, errorName, errorLastName, errorEmail, errorPassword } = useValidate();

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorName && !errorLastName && !errorEmail && !errorPassword) {
      dispatch(
        createUser({
          id: userId,
          name: value.name,
          email: value.email,
          password: value.password,
        })
      );
      succes("Creado correctamente");
      setTimeout(() => {
        navigate(`${PublicRoutes.LOGIN}`);
      }, 3000);
    } else {
      error("Error al generar usuario");
    }
  };
  return (
    <ContainerLoginForm>
      <ContainerForm>
        <h3>Registrarse </h3>
        <Form onSubmit={handleSubmit}>
          <input placeholder="Nombre" name="name" value={value.name} onChange={handleChange} type="text" />
          {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          <input placeholder="Apellido" name="lastName" value={value.lastName} onChange={handleChange} type="text" />
          {errorLastName && <p style={{ color: "red" }}>{errorLastName}</p>}

          <input placeholder="Correo" name="email" value={value.email} onChange={handleChange} type="email" />
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}

          <input placeholder="Contraseña" name="password" value={value.password} onChange={handleChange} type="password" />
          {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}

          <button type="submit">Registrate</button>
        </Form>
      </ContainerForm>
      <Toaster />
    </ContainerLoginForm>
  );
};

export default SignUp;
