import './App.css';

import Header from './components/header/header';
import Home from './pages/home/home'


function App() {
  return (
    <> 
      <Header/>
      <main className='content'>
        <Home />
      </main>
    </>
  );
}

export default App;