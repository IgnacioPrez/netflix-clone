import {useEffect,useRef,useState} from "react"


export const useValidate = () => {
    const [errorName, setErrrorName] = useState(null);
    const [errorLastName, setErrrorLastName] = useState(null);
    const [errorEmail, setErrrorEmail] = useState(null);
    const [errorPassword, setErrrorPassword] = useState(null);
    const firstInput = useRef(true)
    const [value, setValue] = useState({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });
    const isEmailValid = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)
    const isPasswordValid = password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(password)
    useEffect(() => {
        if(firstInput.current){
            firstInput.current = value.name === ""
            return
        }
        if(!value.name.length){
            setErrrorName("El campo de nombre es obligatorio")
            return
        }
        if(value.name.length < 3){
            setErrrorName("Debe contener mas de 3 caracteres")
            return
        }
        if(value.lastName.length < 3){
            setErrrorLastName("Debe contener mas de 3 caracteres")
            return
        }
        if(!value.lastName.length){
            setErrrorLastName("El campo de apellido es obligatorio")
            return
        }
        if(isEmailValid(value.email.trim())){
            setErrrorEmail("Correo invalido")
            return
        }
        if(!isPasswordValid(value.password.trim())){
            setErrrorPassword("La contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo")
            return
        }

        setErrrorEmail(null)
        setErrrorName(null)
        setErrrorLastName(null)
        setErrrorPassword(null)
    }, [value]);
    return { value, setValue, errorName,errorLastName,errorEmail ,errorPassword};

  };