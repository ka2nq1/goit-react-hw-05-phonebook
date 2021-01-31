import React from 'react';
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListItem from '../contactListItem/ContactListItem';
import styles from './ContactList.module.css';
import './ContactList.css';

function ContactList({contacts, onRemoveContact}) {
    return (
        <div className={styles.container}>
            <TransitionGroup component="ul" className={styles.list}>
                {contacts.map((contact, id) => (
                <CSSTransition key={id} classNames="listItem" timeout={250}>
                    <ContactListItem contact={contact} onRemoveContact={onRemoveContact} />
                </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf().isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};