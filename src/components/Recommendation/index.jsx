import React from 'react'
import styles from './Recommendation.module.css'
export function Recommendation({name, title, recommendation}) {

  return (
    <div className={styles.div}>
        <h2 className={styles.h2}>{name}</h2>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.p}>{recommendation}</p>
    </div>
  )
}

