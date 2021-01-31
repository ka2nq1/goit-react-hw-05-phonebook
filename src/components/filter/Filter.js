import React from 'react';
import PropTypes from "prop-types";
import styles from './Filter.module.css';

function Filter({filter, onChange}) {
    return (
        <>
            <label className={styles.find}>Find contacts by name</label>
            <input className={styles.input} type='text' placeholder="name" value={filter} onChange={e => onChange(e.target.value)}/>
        </>    
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};