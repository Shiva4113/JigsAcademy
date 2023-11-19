import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ()=>{
    let auth = !!localStorage.getItem('user')
    return(
        auth ? <Outlet/> : <Navigate to= "/" />
    )
}

export default PrivateRoutes