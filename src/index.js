import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ToggleMenuButton = (props) => {

  const {
    buttonText
  } = props

  const mainButtonClasses = `${styles.mainButton} ${styles.noselect}`;
  const menuButtonClasses = `${styles.menuButton} ${styles.noselect}`;

  return (
    <div className={styles.composedButtonLeft} >
      <div className={mainButtonClasses}>{buttonText}</div>
      <div className={menuButtonClasses}>&#x25C2; &#x2630;</div >
    </div >
  )
}

export default ToggleMenuButton;
