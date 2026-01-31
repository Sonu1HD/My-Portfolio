import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("adminToken");
  return isAdmin ? children : <Navigate to="/" />;
};

export default ProtectedRoute;