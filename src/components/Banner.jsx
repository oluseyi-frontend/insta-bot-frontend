import React, { useState, useEffect } from "react";
import styles from "./../styles/Banner.module.css";

import { Container, Grid, Typography, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import insta from "./../images/195.jpg";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <Grid container spacing={0} className={styles.my_grid}>
                  <Grid item sm={6} className={styles.image_grid}>
            <img src={insta} alt="" className={styles.banner_img} />
          </Grid>
          <Grid item sm={6}>
            <div className={styles.banner_content}>
              
                <Typography variant="h4">
                  Get More followers on Instagram by
                  Kay Instagram Bot
                </Typography>
                <Typography variant="h6">
                  The Best Instagram Bot to get 
                  more Instagram followers, likes,
                  and increase Engagement by 
                  most safe automation app
                </Typography>
                          <div>
                               <Link to="/bot-service">
                             <Button color="primary" variant="contained">
                             
                                  Free Trial
                                   
                  </Button> 
                               </Link>
                </div>
                          
               
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
