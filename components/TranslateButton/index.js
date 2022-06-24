import router from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'
import { TranslateWrapper } from './styles'

const TranslateButton = () => {
  const [language, setLanguage] = useState('pt-BR')
  const handleChange = (locale) => {
    setLanguage(locale)
  }
  useEffect(() => {
    router.push(`/`, `/${language}`, { language })
  }, [language])
  return (
    <TranslateWrapper>
      <select
        onChange={(e) => handleChange(e.target.value)}
        name="Languages"
        id="languages"
      >
        <option selected={language === 'en-US'} value="en-US">
          🇺🇸
        </option>
        <option selected={language === 'pt-BR'} value="pt-BR">
          🇧🇷
        </option>
      </select>
    </TranslateWrapper>
  )
}

export default TranslateButton
