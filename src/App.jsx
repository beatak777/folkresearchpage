import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/Navbar';
import { Interviews, About, Home, Film } from './components/Pages';
import './App.css'
import Footer from './components/Footer/Footer'




function App() {

  return (
    <Router basename={``}>
      <MyNav />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/interviews' element={<Interviews />} />
        <Route path='/film' element={<Film />} />
        <Route path='/home' element={<Home />} />
        

      </Routes>

      <Footer/>
    </Router>
  )
}

export default App