import React from 'react';
import PropTypes from "prop-types";
import styles from './ContactListItem.module.css';

function ContactListItem({contact, onRemoveContact}) {
    return (
        <li className={styles.item}>
            <p className={styles.contact}>
                <span className={styles.name}>{contact.name}:</span>
                <span className={styles.number}>{contact.number}</span>
            </p>
                <button className={styles.btn} type="button" onClick={() => onRemoveContact(contact.id)}>x</button>
        </li>
    ); 
}

export default ContactListItem;

ContactListItem.propTypes = {
    contact: PropTypes.shape().isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};