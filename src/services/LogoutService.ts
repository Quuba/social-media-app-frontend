import {useNavigate} from "react-router-dom";
import {LocalStorageHelper} from "../utils/LocalStorageHelper";

const LogoutService = {
    logout: (navigate:any)=>{
        //Clean store
        //redirect to home
        localStorage.setItem('logged', 'false');
        navigate('/')
    }
}
export default LogoutService