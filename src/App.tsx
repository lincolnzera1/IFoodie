import './App.css'
import Home from './pages/Home/Home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}

export default App
