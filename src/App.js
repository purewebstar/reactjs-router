import React from 'react'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact  from './pages/Contact.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
  render() {
    return(
     <Router>
      <div className="App">
          <Route path='/' component={Home} exact/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
      </div>
     </Router>
    )
  }
}

export default App
