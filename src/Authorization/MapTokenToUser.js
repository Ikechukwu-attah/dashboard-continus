import jwt_decode from 'jwt-decode'
import cookie from 'js-cookie'



const MapTokenToUser = () => {

    try {
        const token = cookie.get('userToken');
        return jwt_decode(token);
    } catch (error) {
        console.log(error);
        return false;
    }



}

export default MapTokenToUser