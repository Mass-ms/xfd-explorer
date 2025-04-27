import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} XFD Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
    marginTop: "2rem",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};

export default Footer;
