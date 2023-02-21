import {useEffect,useRef,useState} from "react"


export const useValidate = () => {
    const [errorEmail, setErrrorEmail] = useState(null);
    const [errorPassword, setErrrorPassword] = useState(null);
    const firstInput = useRef(true)
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const isEmailValid = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)
    const isPasswordValid = password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(password)
    useEffect(() => {
        if(firstInput.current){
            firstInput.current = inputValue.email === ""
            return
        }
        if(isEmailValid(inputValue.email.trim())){
            setErrrorEmail("Correo invalido")
            return
        }
        if(!isPasswordValid(inputValue.password.trim())){
            setErrrorPassword("La contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo")
            return
        }

        setErrrorEmail(null)
        setErrrorPassword(null)
    }, [inputValue]);
    return { inputValue, setInputValue,errorEmail ,errorPassword};

  };