import React from 'react';
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