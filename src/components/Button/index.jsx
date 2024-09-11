import React from 'react'
import styles from './Button.module.css'

export function Button({label, onClick, className}) {
  return (
    <button className={`${styles.Button} && ${className}`} onClick={onClick}>{label}</button>
  )
}
