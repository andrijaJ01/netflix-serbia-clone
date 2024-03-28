import './App.css';
import HeroSection from './Components/HeroSection';

import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className='mx-0 px-0'>
    <HeroSection/>
    <hr className="separation m-0 p-0" />
    </Container>
  );
}

export default App;
