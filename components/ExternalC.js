import React, { Component } from 'react';
import './../inlineext.css';
import styles from './cst.module.css';
export function ExternalC() {
  return (
    <div>
      <h1 className={styles.safe}>Taga</h1>
      <h1>ref</h1>
    </div>
  );
}
export default ExternalC;
