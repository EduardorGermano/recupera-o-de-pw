import Home from './pages/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/list/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Listagem' Component={List}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
