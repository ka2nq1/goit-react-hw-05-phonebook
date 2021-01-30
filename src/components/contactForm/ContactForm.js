import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ContactForm.module.css';
import './ContactForm.css';

export default class ContactForm extends Component {
    formInitialState = {
      name: "",
      number: "",
    };

    state = {
      ...this.formInitialState,
      alert: false,
    };

    handleChange = e => {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        })
    }

    // handleSubmit = e => {
    //     e.preventDefault();

    //     if (this.props.contacts.find(contact => contact.name === this.state.name)) {
    //         alert(`${this.state.name} is already in contacts.`)
    //     } else {
    //         this.props.addContact({ name: this.state.name, number:this.state.number })
    //         this.setState({
    //             name: '',
    //             number: ''
    //         });
    //     }
    // };

    submitHandler = (e) => {
    const { name, number, alert } = this.state;
    e.preventDefault();

    const { contacts } = this.props;
    const isExists = contacts.find((contact) => contact.name === name);

    if (isExists) {
      this.toggleAlert(alert);
      return this.reset();
    }

    const singleContact = {
        name,
        number,
    };

    this.props.addContact(singleContact);
    this.reset();
    };
  
    reset = () => {
      this.setState({ ...this.formInitialState });
    };
  
    toggleAlert = (status) => {
      this.setState({ alert: !status });
    };

    render() {
        const { name, number, alert } = this.state;
        const alertDelay = () => this.setState({ alert: !alert });
        return (
            <>
                <CSSTransition
                  in={alert}
                  classNames="Alert"
                  timeout={1500}
                  unmountOnExit
                  onEntered={alertDelay}
                >
                    <button
                        onClick={this.toggleAlert}
                        className="AlertBtn"
                    >{`Contact already exists!`}</button>
                </CSSTransition>
                <div className={styles.container}>
                    <form className={styles.form} onSubmit={this.submitHandler}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input className={styles.input} type='text' id='name' name='name' placeholder="Name Surname" value={name} onChange={this.handleChange} />
                        <label className={styles.label} htmlFor='number'>Number</label>
                        <input className={styles.input} type='text' id='number' name='number' placeholder="0667773377" value={number} onChange={this.handleChange} />
                        <button type="submit" className={styles.btn}>Add contact</button>
                    </form>
                </div>
            </>
        )
    }
}