import React from 'react'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { JobBioPage } from './pages/JobsBioPage'
import { UserBioPage } from './pages/UserBioPage'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <JobBioPage path='jobbio/:id' />
        <UserBioPage path='userbio/:id' />
      </Router>
    </div>
  )
}
