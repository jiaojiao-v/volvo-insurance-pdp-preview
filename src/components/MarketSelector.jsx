import { markets } from '../data/markets'
import styles from './MarketSelector.module.css'

export default function MarketSelector({ selectedMarketId, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="market-select" className={styles.label}>
        Select market
      </label>
      <div className={styles.selectWrapper}>
        <select
          id="market-select"
          className={styles.select}
          value={selectedMarketId}
          onChange={(e) => onChange(e.target.value)}
        >
          {markets.map((m) => (
            <option key={m.id} value={m.id}>
              {m.flag}  {m.name} — {m.language}
            </option>
          ))}
        </select>
        <span className={styles.chevron} aria-hidden="true">▾</span>
      </div>
    </div>
  )
}
