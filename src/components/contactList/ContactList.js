import React from 'react';
import ContactListItem from '../contactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList({contacts, onRemoveContact}) {
    return (
        <div className={styles.container}>
            {contacts.length > 0 &&
                <ul className={styles.list}>
                <ContactListItem contacts={contacts} onRemoveContact={onRemoveContact}/>
                </ul>
            }
        </div>
    )
}

export default ContactList;