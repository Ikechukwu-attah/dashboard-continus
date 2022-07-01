import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckLoginStatus } from "../Authorization/UserAuthentication";

//  Route protection

const isLoggedIn = CheckLoginStatus();

// If a user is not logged in he/she will not access certain pages............

export const AdminGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = isLoggedIn.user?.data?.role;
    if (!isLoggedIn) return navigate("/");
    if (role !== "admin") return navigate("/home");
  }, []);

  return <>{children}</>;
};

export const ClientGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = isLoggedIn.user?.data?.role;
    if (!isLoggedIn) return navigate("/");
    if (role === "admin") return navigate("/client-management");
  }, []);

  return <>{children}</>;
};

// .........................................................

// Public route gaurd protection(If a user is logged in, he/she should be redirected )............
export const PublicRouteGaurd = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn)
      return navigate(
        isLoggedIn.user?.data?.role === "admin" ? "/client-management" : "/home"
      );
  }, []);

  return <>{children}</>;
};
// .................................................................
