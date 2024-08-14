import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <p>Welcome, {user.name}!</p>

            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
};

export default UserMenu;
