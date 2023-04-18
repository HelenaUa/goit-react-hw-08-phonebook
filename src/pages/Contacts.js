import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { GlobalStyle } from 'components/GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';


export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <HelmetProvider>
            <Helmet>
               <title>Your contacts</title>
            </Helmet>
            <div>
               <GlobalStyle />
               <h1>Phonebook</h1>
               <ContactForm />

               <h2>Contacts</h2>
               <Filter />
               {isLoading && !error && <b>Request in progress...</b>}
               <ContactList />
            </div>
        </HelmetProvider>
    )
}

