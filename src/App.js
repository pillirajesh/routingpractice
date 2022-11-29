import {Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <>
    <Header />
    <Switch>
      <Home />
      <About />
      <Contact />
      <NotFound />
    </Switch>
  </>
)

export default App
