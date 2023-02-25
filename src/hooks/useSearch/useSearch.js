import { useEffect, useRef, useState } from "react";
export default function useSearch() {
  const [query, setQuery] = useState("");
  const [ errorMessage,setErrorMessage] = useState("")
  const firstInput = useRef(true)
  useEffect(() => {
    if(firstInput.current){
        firstInput.current = query === ""
        return
    }
    if (query.startsWith(" ")) return;
    if (query.match(/^\d+$/)) {
        setErrorMessage("No puede comenzar con un numero");
    }
    if (query.length < 3) {
        setErrorMessage("La busqueda debe tener más de 3 caracteres");
    }
    return setErrorMessage("")
  }, [query]);

  return { query, setQuery ,errorMessage};
}
