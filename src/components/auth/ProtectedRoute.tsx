import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Navigate } from "react-router-dom";

interface Iprops {
    children: ReactNode,
}
const ProtectedRoute = ({children}:Iprops) =>{
    const isLoginIn = useSelector((state: RootState) => state.isLogin.value);
    if (!isLoginIn) {
        return <Navigate to='/login' replace />;
    }
    return children;
}
export default ProtectedRoute;