import { useState } from 'react'
import Header from './components/Header'
import InputPanel from './components/InputPanel'
import InsurancePDP from './components/InsurancePDP'
import './App.css'

const defaultValues = {
  description: "",
  usp1Title: "",
  usp1Description: "",
  usp1Image: null,
  usp2Title: "",
  usp2Description: "",
  usp2Image: null,
  usp3Title: "",
  usp3Description: "",
  usp3Image: null,
  disclaimer: "",
}

export default function App() {
  const [values, setValues] = useState(defaultValues)

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="app">
      <Header />
      <main className="main splitLayout">
        <InputPanel values={values} onChange={handleChange} />
        <div className="previewPane">
          <InsurancePDP values={values} />
        </div>
      </main>
    </div>
  )
}
