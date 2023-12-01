import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
