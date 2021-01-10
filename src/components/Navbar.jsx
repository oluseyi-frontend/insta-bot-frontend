import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/Navbar.module.css";
import { Button, Container } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbar_content}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://img.icons8.com/nolan/64/bot.png" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link>
              <Button>Services</Button>
            </Link>
            <Link>
              <Button variant="outlined" color="primary">
                login
              </Button>
            </Link>
            <Link>
              <Button variant="outlined" color="primary">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
