import logo from './logo.svg';
import './App.css';

//importacion de componentes React.
import CompShowEquipos from './Equipos/showEquipos';
import CompCreateEquipo from './Equipos/createEquipos';
import CompEditEquipos from './Equipos/editEquipos';

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>

      <BrowserRouter>
      <Routes>
        <Route path='/equipos' element={<CompShowEquipos></CompShowEquipos>}></Route>
        <Route path='/equipos/create' element={<CompCreateEquipo></CompCreateEquipo>}></Route>
        <Route path='/equipos/:id' element={<CompEditEquipos></CompEditEquipos>} ></Route>


      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
