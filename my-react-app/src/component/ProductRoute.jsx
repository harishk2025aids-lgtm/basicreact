import { Navigate } from "react-router-dom";
 function ProductRoute() {
    const isAuthenticated=false;
    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;

}
export default ProductRoute;