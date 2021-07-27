import React from 'react';
import styles from './Navbar.module.scss';

function Navbar() {
    return (
        <>
            <div className={styles.topnav}>
                <div className={styles.active}>Todo List App</div>
            </div>
        </>
    );
}

export default Navbar;
