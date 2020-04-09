import React from 'react'
import { SearchBar } from './components/SearchBar'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <SearchBar />
    </div>
  )
}
