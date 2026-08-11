import { Flex } from '@radix-ui/themes';
import './App.css';
import { Footer, Header, Home } from './components';

function App() {
  return (
    <Flex direction="column" align="center" justify="center" className="px-8">
      <Header />
      <Home />
      <Footer />
    </Flex>
  )
}

export default App
