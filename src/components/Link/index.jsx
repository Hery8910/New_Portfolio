import styles from './Link.module.css'

// eslint-disable-next-line react/prop-types
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
