import React, { Fragment } from 'react';
import styles from './Search.module.css'
import { TextField } from '@mui/material';

export function Search() {
    return (
        <Fragment>
            <div className={styles.main_search}>
                <div className={styles.sub_search}>
                    <TextField sx={{ width: '25%' }} id="outlined-basic" label="Search" variant="filled" />
                    <button>Search</button>
                </div>
            </div>
        </Fragment>
    )
}
