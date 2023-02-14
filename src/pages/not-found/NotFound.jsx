import { Route, Routes } from "react-router-dom"

const RoutesWithNotFound = ({children}) => {
  return (
    <Routes>
        {children}
        <Route path="*" element={<div>Not found</div>}/>
    </Routes>
    )
}

export default RoutesWithNotFound