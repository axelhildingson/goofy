import React, { Component } from 'react';
import Search from '../components/search';
import Result from '../components/result';
import styles from './styles.css';

export default class StartView extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2>GOOFY SEARCH</h2>
        <div className={styles.container}>
        <Search />
        </div>
        <div className={styles.container}>
        <Result showResult={false} />
        </div>
      </div>
    );
  }
}
