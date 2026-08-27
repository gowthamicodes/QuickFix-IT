import {AuthContext} from "../Context/Auth-context"

import { useContext} from "react"

import {Navigate} from "react-router-dom"

function ProtectedRoute ({children}) {

const {isLoggedIn} = useContext(AuthContext);

if(!isLoggedIn) {
    return <Navigate to="/login" replace />
}

return children;

}

export default ProtectedRoute;