import './App.css';
import HeroSection from './Components/HeroSection';
import CardLeft from './Components/CardLeft';
import CardRight from './Components/CardRight';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='mx-0 px-0'>
    <HeroSection/>
   
    <CardLeft/>
   
    <CardRight/>

    </Container>
  );
}

export default App;
