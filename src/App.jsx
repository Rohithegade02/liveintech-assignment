import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'

import ThirdPage from './components/ThirdPage'
import SecondPage from './components/SecondPage'

function App() {
  

  return (
    
      <div className='relative max-w-[100vw] bg-[#A5DBFA] '>
      <Header />  
      <MainContent />
      <SecondPage />
      <ThirdPage/>
    </div>
    
  )
}

export default App
