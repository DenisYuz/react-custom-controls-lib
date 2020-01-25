import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ToggleMenuButton extends Component {
  static propTypes = {
    buttonText: PropTypes.string
  }

  render() {
    const {
      buttonText
    } = this.props

    return (
      <div className={styles.composedButtonLeft}>
        <div className={styles.mainButton}>{buttonText}</div>
        <div className={styles.buttonArrow}>&#x25C2; &#x2630;</div>
      </div>
    )
  }
}
