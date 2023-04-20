import ListItem from 'components/ListItem/ListItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';
import { selectFiltredContacts } from 'redux/contacts/selectors';


export default function ContactList() {

    const dispatch = useDispatch();
    
    const onDelete = (id) => {
        dispatch(deleteContact(id))
    };

    const filtredContacts = useSelector(selectFiltredContacts);

    return (
        <ul style={{ paddingLeft: '20px'}}>
            {filtredContacts.map(item => {
                return (
                    <ListItem key={item.name}
                        name={item.name}
                        number={item.number}
                        onDeleteContact={() => onDelete(item.id)}
                    />
                )
            })}
        </ul>
    )
};

