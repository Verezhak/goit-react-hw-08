import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';



export const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation();
    if (isLoggedIn) {
        return <Navigate to={location.state ?? '/'} />
    }

    return children;
};