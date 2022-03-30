import axios from "axios";
import Cookie from "js-cookie";

// Configuring axios
const access_token = Cookie.get("userToken");
axios.defaults.headers.common.Authorization = "Bearer " + access_token;
export default axios;
