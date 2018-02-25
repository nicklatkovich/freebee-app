import React from 'react'
import { Route } from 'react-router-dom'
import PreviewPage from './components/pages/previewPage'
import MainPage from './components/pages/mainPage'

const App = () => (
  <div className="App"> 
    <Route exact path="/" component={PreviewPage} />
    <Route path="/map" component={MainPage} />
  </div>
)

export default App
