import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = (props: Props) => {
  if (localStorage.getItem("authToken")) {
    return props.children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default ProtectedRoute;
