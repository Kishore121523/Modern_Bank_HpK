import React from 'react'
import './App.css'

import Home from './Home/Home'
import Feature1 from './Feature1/Feature1'
import Feature2 from './Feature2/Feature2'
import Feature3 from './Feature3/Feature3'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <div>

      <Home/>
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Testimonials />
      <Contact/>

    </div>
  )
}

export default App