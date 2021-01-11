import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import image from "./../images/195.jpg";
import styles from "./../styles/BotService1.module.css";
import axios from "axios";
import Loading from "./Loading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BotService1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountToParse, setAccountToParse] = useState("");
  const [postId, setPostId] = useState();
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [openDialogue, setOpenDialogue] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "accountToParse") {
      setAccountToParse(value);
    }
    if (name === "Post Number") {
      setPostId(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);

    axios
      .post("https://kay-insta-bot.herokuapp.com/login/", {
        user: username,
        password: password,
        accountToParse: accountToParse,
        postId: postId - 1,
      })
      .then((data) => {
        if (data) {
          setMessage(data.data.msg);
          setOpenDialogue(true);
          setMessage2(data.data.log.login);
          setMessage3(data.data.log.followed);
          setMessage4(data.data.log.limit);

          setOpen(false);
        }
      })
      .catch(() => {
        setOpen(false);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogueClose = () => {
    setOpenDialogue(false);
  };

  return (
    <div className={styles.bot_service}>
      <Container>
        <Grid container spacing={0} className={styles.my_grid}>
          <Grid item sm={6}>
            <div className={styles.image_wrapper}>
              <img src={image} alt="" />
            </div>
          </Grid>
          <Grid item sm={6}>
            <div className={styles.form_wrapper}>
              <Typography>
                Instagram bot is the main service of Kay Bot. This bot uses the
                information that you’ve set to follow Instagram accounts and to
                leave comments... catch other's attention to your profile, and
                if they like your content, they’ll follow you.
                {/* and likes on their posts, and view their stories on 
                        behalf of your Instagram account.  */}
              </Typography>
              <Typography>
                Join telegram channel{" "}
                <a href="https://t.me/joinchat/GDWuZp0wpGrkLIEA">here</a> to
                request for more free service from the instagram bot
              </Typography>
              <Typography variant="h5">
                Provide the following details
              </Typography>
              <form action="">
                <TextField
                  className={styles.my_textfield}
                  id="standard-basic"
                  label="instagram username"
                  onChange={handleChange}
                  name="username"
                  value={username}
                />
                <TextField
                  className={styles.my_textfield}
                  id="standard-basic"
                  label="instagram password"
                  onChange={handleChange}
                  name="password"
                  value={password}
                  type="password"
                />
                <TextField
                  className={styles.my_textfield}
                  id="standard-basic"
                  label="account to parse"
                  onChange={handleChange}
                  name="accountToParse"
                  value={accountToParse}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Post likers will be followed"
                  name="Post Number"
                  onChange={handleChange}
                  value={postId}
                  placeholder="Post Number"
                  className={styles.my_textfield}
                />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
        <Backdrop className={styles.my_backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Dialog
          open={openDialogue}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleDialogueClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Instagram bot log"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <ul>
                {message ? <li>{message}</li> : null}
                {message2 ? <li>{message2}</li> : null}
                {message3 ? <li>{message3}</li> : null}
                {message4 ? <li>{message4}</li> : null}
              </ul>
              join telegram channel{" "}
              <a href="https://t.me/joinchat/GDWuZp0wpGrkLIEA">here</a> to
              request for more free service from the instagram bot
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogueClose} color="primary">
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default BotService1;
