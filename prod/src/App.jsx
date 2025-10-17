// App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Impact from './pages/Impact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('shop')

  const renderPage = () => {
    switch (currentPage) {
      case 'impact':
        return <Impact />
      case 'shop':
      default:
        return <Shop />
    }
  }

  return (
    <div className="App">
      <Navbar onNavigate={setCurrentPage} />

      {/* Main page content */}
      <main className="page-content">
        {renderPage()}
      </main>


      <Footer />
    </div>
  )
}

export default App
