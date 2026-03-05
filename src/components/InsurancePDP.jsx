import { useState } from 'react'
import CoverageCard from './CoverageCard'
import styles from './InsurancePDP.module.css'

export default function InsurancePDP({ market }) {
  const [selectedPlanId, setSelectedPlanId] = useState(
    market.plans.find((p) => p.badge) ? market.plans.find((p) => p.badge).id : market.plans[0].id
  )

  const selectedPlan = market.plans.find((p) => p.id === selectedPlanId)

  return (
    <section className={styles.pdp}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>{market.tagline}</p>
          <h1 className={styles.heroTitle}>{market.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{market.heroSubtitle}</p>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.carSilhouette}>
            {/* Simple SVG car silhouette */}
            <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M185 50H15C12 50 10 48 10 45V38C10 35 12 33 15 33L45 25C50 23 60 18 80 16H120C140 16 160 22 165 25L185 33C188 34 190 36 190 39V45C190 48 188 50 185 50Z" />
              <circle cx="45" cy="52" r="12" />
              <circle cx="155" cy="52" r="12" />
              <circle cx="45" cy="52" r="6" fill="white" />
              <circle cx="155" cy="52" r="6" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className={styles.plans}>
        <h2 className={styles.plansHeading}>Choose your cover</h2>
        <div className={styles.planGrid}>
          {market.plans.map((plan) => (
            <CoverageCard
              key={plan.id}
              plan={plan}
              market={market}
              isSelected={plan.id === selectedPlanId}
              onSelect={setSelectedPlanId}
            />
          ))}
        </div>
      </div>

      {/* Selected plan summary */}
      {selectedPlan && (
        <div className={styles.summary}>
          <div className={styles.summaryInner}>
            <div className={styles.summaryText}>
              <span className={styles.summaryLabel}>Selected plan</span>
              <span className={styles.summaryPlan}>{selectedPlan.name}</span>
            </div>
            <button className={styles.getQuoteBtn}>
              Get a quote →
            </button>
          </div>
        </div>
      )}

      {/* Legal note */}
      <p className={styles.legalNote}>{market.legalNote}</p>
    </section>
  )
}
