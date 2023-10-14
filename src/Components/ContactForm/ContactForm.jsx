import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Rajesh");
  const [email, setEmail] = useState("rajdhaka199@gmail.com");
  const [text, setText] = useState("Hello Rajesh");

  function onSubmit(e) {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button icon={<MdMessage fontSize="24px" />}>VIA SUPPORT CHAT</Button>
          <Button icon={<FaPhoneAlt fontSize="24px" />}>VIA CALL</Button>
        </div>
        <Button icon={<HiMail fontSize="24px" />} isOutline={true}>
          Via Email form
        </Button>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows={5} />
          </div>
          <div className={styles.btn_sub}>
            <Button>SUBMIT BUTTON</Button>
          </div>
          <p>{name + " " + email + " " + text + " "}</p>
        </form>
      </div>
      <div>
        <img src="./images/contact.svg" alt="contact image" />
      </div>
    </div>
  );
};

export default ContactForm;
