import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          Created with care by{" "}
          <div style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}>
            JIIT Students
          </div>
        </h6>
      </div>

      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "Roboto",
          }}
        >
          Data provided by{" "}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;
