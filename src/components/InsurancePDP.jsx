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
        {/* Sticky top nav bar */}
        <div className={styles.navBar}>
          <button className={styles.backButton} aria-label="Back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className={styles.navTitle}>Car insurance</span>
          <div className={styles.navRight} />
        </div>

        {/* Scrollable body */}
        <div className={styles.scrollBody}>
          {/* Hero image placeholder */}
          <div className={styles.heroImage}>
            <span className={styles.heroBrand}>VOLVO</span>
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

            {/* USP Cards — open list style */}
            <div className={styles.uspList}>
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

        {/* Sticky bottom CTA */}
        <div className={styles.bottomBar}>
          <button className={styles.ctaButton}>Select plan</button>
        </div>
      </div>
    </div>
  )
}
