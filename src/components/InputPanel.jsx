import styles from './InputPanel.module.css'

const labelStyle = { color: '#141414', fontSize: '13px', fontWeight: 600 }

function UspSection({ index, values, onChange }) {
  const prefix = `usp${index}`

  function handleImageUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    const prevUrl = values[`${prefix}Image`]
    if (prevUrl) URL.revokeObjectURL(prevUrl)
    const url = URL.createObjectURL(file)
    onChange(`${prefix}Image`, url)
  }

  return (
    <div className={styles.uspSection}>
      <h3 className={styles.uspHeading}>USP {index}</h3>
      <div className={styles.field}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          placeholder="Enter USP title..."
          value={values[`${prefix}Title`]}
          onChange={(e) => onChange(`${prefix}Title`, e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label style={labelStyle}>Description</label>
        <textarea
          rows={3}
          placeholder="Enter USP description..."
          value={values[`${prefix}Description`]}
          onChange={(e) => onChange(`${prefix}Description`, e.target.value)}
          className={styles.textarea}
        />
      </div>
      <div className={styles.field}>
        <label style={labelStyle}>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.fileInput}
        />
        {values[`${prefix}Image`] && (
          <img
            src={values[`${prefix}Image`]}
            alt={`USP ${index} preview`}
            style={{
              width: 80,
              height: 60,
              objectFit: 'cover',
              borderRadius: 4,
              marginTop: 8,
              display: 'block',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default function InputPanel({ values, onChange }) {
  return (
    <div className={styles.panel}>
      <h2 className={styles.heading}>Content Editor</h2>

      <div className={styles.field}>
        <label style={labelStyle}>Description</label>
        <textarea
          rows={3}
          placeholder="Enter offer description..."
          value={values.description}
          onChange={(e) => onChange('description', e.target.value)}
          className={styles.textarea}
        />
      </div>

      <UspSection index={1} values={values} onChange={onChange} />
      <UspSection index={2} values={values} onChange={onChange} />
      <UspSection index={3} values={values} onChange={onChange} />

      <div className={styles.field}>
        <label style={labelStyle}>Disclaimer</label>
        <textarea
          rows={3}
          placeholder="Enter disclaimer text..."
          value={values.disclaimer}
          onChange={(e) => onChange('disclaimer', e.target.value)}
          className={styles.textarea}
        />
      </div>
    </div>
  )
}
