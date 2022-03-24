import styled from 'styled-components'

export const TranslateWrapper = styled.div`
  z-index: 10;
  margin: auto 15px auto auto;
  background-color: rgba(26, 27, 29) !important;
  outline: none;
  border: none;
  appearance: none;
  & > select {
    background-color: rgba(26, 27, 29);
    outline: none;
    border: none;
    scroll-behavior: smooth;
    color: rgba(113, 113, 122);
    & > option {
      text-align: center;
      border: 0;
    }
  }

  &:focus {
    background-color: rgba(26, 27, 29);
  }
`
