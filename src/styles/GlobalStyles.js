import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    HTML {
      font-family:  Arial, Helvetica, sans-serif;
    }
    
    body {
    background: #111325;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }
`
