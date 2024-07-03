
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import NextPage from './components/NextPage'
import ThirdPage from './components/ThirdPage'

function App() {
  

  return (
    
    <ParallaxProvider>
      <div className='relative max-w-[100vw] bg-[#A5DBFA] '>
      <Header />  
      <MainContent />
      <NextPage />
      <ThirdPage/>
    </div>
      </ParallaxProvider>
    
  )
}

export default App
