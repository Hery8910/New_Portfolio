import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
export function Button({label, onClick, className,  ariaLabel}) {
  return (
    <button 
    className={`${styles.Button} && ${className}`} 
    aria-label={ariaLabel}
    onClick={onClick}>{label}</button>
  )
}
