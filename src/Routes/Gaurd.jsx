import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckLoginStatus } from "../Authorization/UserAuthentication";

//  Route protection

const isLoggedIn = CheckLoginStatus();

// If a user is not logged in he/she will not access certain pages............
export const ProtectedRouteGaurd = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return navigate("/");
  }, []);

  return <>{children}</>;
};
// .........................................................

// Public route gaurd protection(If a user is logged in, he/she should be redirected to come before the token expires)............
export const PublicRouteGaurd = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) return navigate("/home");
  }, []);

  return <>{children}</>;
};
// .................................................................
