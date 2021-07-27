import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from './LayoutContainer.module.scss';
import { Navbar } from '../../components';

function LayoutContainer({ children }) {
    return (
        <>
            <Head>
                <title>Todo List App</title>
                <meta name="description" content="Todo List App usign NextJS" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Hang Tu Wong Ley Franco" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="container">
                <main>{children}</main>
            </div>
            <footer className={styles.footer} aria-label="footer">
                <a
                    href="https://github.com/Hangtu/todoList-next-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Created by Hang Tu Wong Ley
                </a>
            </footer>
        </>
    );
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutContainer;
