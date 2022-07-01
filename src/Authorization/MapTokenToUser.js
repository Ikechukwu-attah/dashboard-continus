import jwt_decode from 'jwt-decode'
import cookie from 'js-cookie'



const MapTokenToUser = () => {

    try {
        const token = cookie.get('userToken');
        return jwt_decode(token);
    } catch (error) {

        return false;
    }



}

export default MapTokenToUser