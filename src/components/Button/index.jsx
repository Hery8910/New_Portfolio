import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
export function Button({label, onClick, className}) {
  return (
    <button className={`${styles.Button} && ${className}`} onClick={onClick}>{label}</button>
  )
}
