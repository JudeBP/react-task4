import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUp from './pages/SignUp'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <header className="App-header">

            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/sign-up" element={ <SignUp /> } />
              </Routes>
            </ThemeProvider>
          </header>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App