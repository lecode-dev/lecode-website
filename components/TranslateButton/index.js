import React from 'react'
import { TranslateWrapper } from './styles'
import { useRouter } from 'next/router'

const TranslateButton = () => {
  const router = useRouter()
  const handleChange = (locale) => {
    router.push({
      route: router.pathname,
      query: router.query
  }, router.asPath, { locale });
  }

  return (
    <TranslateWrapper>
      <select
        onChange={(e) => handleChange(e.target.value)}
        name="Languages"
        id="languages"
      >
        <option selected={router.locale === 'en-US'} value="en-US">
          🇺🇸
        </option>
        <option selected={router.locale === 'pt-BR'} value="pt-BR">
          🇧🇷
        </option>
      </select>
    </TranslateWrapper>
  )
}

export default TranslateButton
