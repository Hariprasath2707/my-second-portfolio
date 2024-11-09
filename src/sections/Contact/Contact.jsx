import styles from './ContactStyles.module.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l4ihwol', 'template_zp45c2a', form.current, {
        publicKey: '3yRZ0o_lTpjg3S-w3',
      })
      .then(
        () => {
          alert('Your message has been sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" className="visually-hidden"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="visually-hidden"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="visually-hidden"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input
          className={`${styles.btn} hover`}
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
}

export default Contact;
