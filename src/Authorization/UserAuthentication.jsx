import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";
import MapTokenToUser from "./MapTokenToUser";

// This function checks if a user is logged in or not.
// Token is to be saved in cookies which is browser based storage.
// used the saved token to check if a user is logged in or not.

export const CheckLoginStatus = () => {
  const accessToken = Cookie.get("userToken");

  if (!accessToken) return false;

  try {
    
    return jwt_decode(accessToken);
  } catch (error) {
    return false;
  }
};
