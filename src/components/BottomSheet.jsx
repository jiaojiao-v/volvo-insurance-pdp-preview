import styles from './BottomSheet.module.css'

export default function BottomSheet({ title, description, image, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        {image && (
          <img
            src={image}
            alt={title || ''}
            style={{
              width: '100%',
              aspectRatio: '4 / 3',
              maxHeight: 200,
              objectFit: 'cover',
              borderRadius: 8,
              marginBottom: 16,
            }}
          />
        )}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
