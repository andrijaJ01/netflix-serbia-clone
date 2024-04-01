import './main.scss';
import HeroSection from './Components/HeroSection';
import CardLeft from './Components/CardLeft';
import CardRight from './Components/CardRight';
import QuestionsSection from './Components/QuestionSection';
import Footer from './Components/Footer';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='mx-0 px-0'>
    <HeroSection/>
   
    <CardLeft/>
   
    <CardRight/>

    <QuestionsSection/>
    <Footer />

    </Container>
  );
}

export default App;
