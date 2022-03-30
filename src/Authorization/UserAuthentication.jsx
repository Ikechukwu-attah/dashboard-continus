import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

// This function checks if a user is logged in or not.
// Token is to be installed in cookies which is browser based storage.
// used token to check if a user is logged in or not.

export const CheckLoginStatus = () => {
  const accessToken = Cookie.get("userToken");

  if (!accessToken) return false;

  const decodedToken = jwt_decode(accessToken);
  if (!decodedToken.user) return false;
  return true;
};
