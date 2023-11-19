import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ()=>{
    let auth = !!localStorage.getItem('user')
    return(
        !auth ? <Outlet/> : <Navigate to= "/dashboard" />
    )
}

export default PrivateRoutes