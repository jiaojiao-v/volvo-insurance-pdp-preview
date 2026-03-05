import ImageCard from './ImageCard'
import InformationBox from './InformationBox'
import styles from './InsurancePDP.module.css'

export default function InsurancePDP({ values }) {
  const usps = [
    { title: values.usp1Title, description: values.usp1Description, image: values.usp1Image },
    { title: values.usp2Title, description: values.usp2Description, image: values.usp2Image },
    { title: values.usp3Title, description: values.usp3Description, image: values.usp3Image },
  ]

  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneScreen}>
        {/* Hero */}
        <div className={styles.hero}>
          <span className={styles.volvoBrand}>VOLVO</span>
          <h2 className={styles.heroTitle}>Car Insurance</h2>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Description */}
          <p
            className={styles.description}
            style={{ color: values.description ? '#707070' : '#c0c0c0' }}
          >
            {values.description || 'Enter offer description...'}
          </p>

          {/* What's included */}
          <h3 className={styles.sectionHeader}>What's included</h3>

          {/* USP Cards */}
          <div className={styles.uspCards}>
            {usps.map((usp, i) => (
              <ImageCard
                key={i}
                title={usp.title}
                description={usp.description}
                image={usp.image}
                isEmpty={!usp.title}
              />
            ))}
          </div>

          {/* Disclaimer */}
          <InformationBox
            message={values.disclaimer}
            isEmpty={!values.disclaimer}
          />
        </div>
      </div>
    </div>
  )
}
