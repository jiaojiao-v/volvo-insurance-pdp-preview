import styles from './ImageCard.module.css'

export default function ImageCard({ title, description, image, isEmpty }) {
  return (
    <div className={styles.card}>
      {image ? (
        <img
          src={image}
          alt={isEmpty ? '' : title}
          style={{
            width: 90,
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            borderRadius: 6,
            flexShrink: 0,
          }}
        />
      ) : (
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderBrand}>VOLVO</span>
        </div>
      )}
      <div className={styles.cardContent}>
        <p
          className={styles.cardTitle}
          style={{ color: isEmpty ? '#c0c0c0' : '#141414' }}
        >
          {isEmpty ? 'Enter USP title...' : title}
        </p>
        {!isEmpty && description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
      </div>
    </div>
  )
}
