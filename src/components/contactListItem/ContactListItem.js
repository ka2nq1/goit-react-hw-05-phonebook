import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ContactListItem.module.css';

function ContactListItem({contacts, onRemoveContact}) {
    return (
        <>
            {
                contacts.map((contact, id) => (
                    <CSSTransition key={id} classNames='ListItem' timeout={250}>
                        <li className={styles.item} key={contact.id}>
                            <p className={styles.contact}>
                                <span className={styles.name}>{contact.name}:</span>
                                <span className={styles.number}>{contact.number}</span>
                            </p>
                                <button className={styles.btn} type="button" onClick={() => onRemoveContact(contact.id)}>x</button>
                        </li>
                    </CSSTransition>
                ))}
        </>
    ); 
}

export default ContactListItem;