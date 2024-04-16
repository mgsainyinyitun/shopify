import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavTab from './components/NavTab/NavTab';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Header />
        <Container maxWidth='lg' sx={{ paddingBottom: '50px', marginTop: '50px' }}><Main /></Container>
        <NavTab />
    </div>
  );
}

export default App;
