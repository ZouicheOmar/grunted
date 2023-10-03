/** @format */
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <div className="relative min-w-screen max-w-screen min-h-screen flex md:justify-end">
        <Navbar />
        <HomePage />
      </div>
    </>
  )
}

export default App
