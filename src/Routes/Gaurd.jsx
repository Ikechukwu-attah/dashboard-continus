import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckLoginStatus } from "../Authorization/UserAuthentication";

//  Route protection

const isLoggedIn = CheckLoginStatus();
console.log("isLoggedin=>>>>>", isLoggedIn?.user?.data?.role);

// If a user is not logged in he/she will not access certain pages............
export const ProtectedRouteGaurd = ({ children }) => {
  const navigate = useNavigate();
  console.log("role=>>", isLoggedIn.user?.data?.role);

  useEffect(() => {
    console.log("role=>>", isLoggedIn.user?.data?.role);
    if (!isLoggedIn) return navigate("/");
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
