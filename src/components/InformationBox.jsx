import styles from './InformationBox.module.css'

export default function InformationBox({ message, isEmpty }) {
  return (
    <div className={styles.box}>
      <span className={styles.icon} aria-hidden="true">ℹ</span>
      <p className={styles.message} style={{ color: isEmpty ? '#c0c0c0' : '#707070' }}>
        {isEmpty ? 'Enter disclaimer text...' : message}
      </p>
    </div>
  )
}
