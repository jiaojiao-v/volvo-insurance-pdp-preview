import { formatPrice } from '../data/markets'
import styles from './CoverageCard.module.css'

export default function CoverageCard({ plan, market, isSelected, onSelect }) {
  const { currency, locale } = market

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(plan.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(plan.id)}
      aria-pressed={isSelected}
    >
      {plan.badge && (
        <div className={styles.badge}>{plan.badge}</div>
      )}

      <h3 className={styles.planName}>{plan.name}</h3>
      <p className={styles.description}>{plan.description}</p>

      <div className={styles.pricing}>
        <span className={styles.price}>
          {formatPrice(plan.monthlyPrice, currency, locale)}
        </span>
        <span className={styles.period}>/mo</span>
      </div>
      <div className={styles.annual}>
        {formatPrice(plan.annualPrice, currency, locale)} per year
      </div>

      <ul className={styles.coverages} aria-label="Coverage details">
        {plan.coverages.map((c) => (
          <li key={c.label} className={`${styles.coverageItem} ${c.included ? styles.included : styles.excluded}`}>
            <span className={styles.icon} aria-hidden="true">
              {c.included ? '✓' : '✕'}
            </span>
            {c.label}
          </li>
        ))}
      </ul>

      <button
        className={`${styles.ctaButton} ${isSelected ? styles.ctaSelected : ''}`}
        onClick={(e) => { e.stopPropagation(); onSelect(plan.id); }}
        aria-label={`Select ${plan.name} plan`}
      >
        {isSelected ? 'Selected' : 'Select plan'}
      </button>
    </div>
  )
}
