// Footer.js
import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <h4>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</h4>
        <p>Copyright © 2024 DEMO Streaming. All Rights Reserved</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.socialIcons}>
          <i className="fab fa-facebook fa-lg"></i>
          <i className="fab fa-twitter fa-lg"></i>
          <i className="fab fa-instagram fa-lg"></i>
        </div>

        <div className={styles.appIcons}>
          <i className="fab fa-apple fa-lg"></i>
          <i className="fab fa-google-play fa-lg"></i>
          <i className="fab fa-windows fa-lg"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
