import React from 'react';
import styles from './Main.module.css';
import '../App.css';

const Main = (props) => {
	return <div className={styles.Main}>{props.children}</div>;
};

export default Main;
