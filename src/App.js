import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
