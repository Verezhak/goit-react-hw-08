import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBin5Fill } from "react-icons/ri";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.item}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => dispatch(deleteContact(id))}><RiDeleteBin5Fill className={s.icon} size="24" /></button>
        </li>
    );
};

export default Contact;

