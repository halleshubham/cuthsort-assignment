import { Container, Row } from 'react-bootstrap';
import './assets/css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import OnboardingProvider from './context/OnboardingProvider';

function App() {
  return (
    <OnboardingProvider>
    <div className="App">
      <Container fluid="md">
        <Row className='inner-container align-middle'>
        <Header />
        <Main />
        </Row>
      </Container>
      </div>
    </OnboardingProvider>
  );
}

export default App;
