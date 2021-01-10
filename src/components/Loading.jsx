import React, { useState, useEffect } from 'react';
import {
  CircularProgress,
} from "@material-ui/core";
import styles from './../styles/Loading.module.css'

const Loading = () => {
    return ( 
        <div className={styles.my_circular}>
            <CircularProgress className={styles.my_progress}/>
        </div>
     );
}
 
export default Loading;