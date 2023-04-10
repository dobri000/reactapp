import './App.css';
import Navbar from './components/navbar';
import Table from './pages/table';
import Results from './pages/results';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
