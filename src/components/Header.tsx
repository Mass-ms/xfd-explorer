import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>XFD Explorer</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/search" style={styles.navLink}>
                Search
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/xfd/new" style={styles.navLink}>
                新規登録
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  navItem: {
    marginLeft: "1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
  },
};

export default Header;
