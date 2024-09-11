import React from 'react'
import styles from './Link.module.css'

export function Link({href, ariaLabel, icon}) {
  return (
    <a
          className={styles.a}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
           {icon} 
        </a>
  )
}
