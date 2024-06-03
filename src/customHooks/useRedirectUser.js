import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../redux/features/auth/authService';

const useRedirectUser = (path) => {
 const navigate = useNavigate();
 
    useEffect(() => {
        let isLoggedin;
        
        const redirectLoggedOutUser = async () => {
           try { 
            isLoggedin = await authService.getLoginStatus();
           console.log(isLoggedin)
        } catch (error) {
            console.log(error.message);
           }
           if (!isLoggedin || isLoggedin.message === "jwt expired") {
            navigate(path);
            return;
           }
        };
        redirectLoggedOutUser();
 }, [path, navigate])
}

export default useRedirectUser