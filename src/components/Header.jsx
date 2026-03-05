import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          {/* Volvo iron mark / wordmark */}
          <svg
            className={styles.logo}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Volvo"
          >
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
            <path
              d="M24 12 L36 36 H12 L24 12Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.wordmark}>VOLVO</span>
        </div>
        <div className={styles.title}>
          <span className={styles.tool}>Insurance PDP</span>
          <span className={styles.badge}>Preview Tool</span>
        </div>
      </div>
    </header>
  )
}
