import router from 'next/router'
import React from 'react'
import { TranslateWrapper } from './styles'

const TranslateButton = () => {
  const handleChange = (locale) => {
    console.log(locale)
    router.push(`/`, `/${locale}`, { locale })
  }
  return (
    <TranslateWrapper>
      <select
        onChange={(e) => handleChange(e.target.value)}
        name="Languages"
        id="languages"
      >
        <option value="en-US">🇺🇸</option>
        <option value="pt-BR">🇧🇷</option>
      </select>
    </TranslateWrapper>
  )
}

export default TranslateButton
