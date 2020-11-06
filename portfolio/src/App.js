import About from './components/about';
import Works from './components/works';
import Contact from './components/contact';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Hero from './components/hero'


import "./styles/style.css"

function App() {
  return <div className="App">
    <Navigation/>
    <Hero/>
    <Works/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
}

export default App
