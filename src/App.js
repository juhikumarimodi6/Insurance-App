import './App.css';
import InsuranceApp from './Components/InsuranceApp';
import SelfFamilyTab from './Components/SelfFamilyTab';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route exact path='/' element={<SelfFamilyTab />} />
        <Route path='/userform' element={<InsuranceApp />} />
      </Routes>
    </div>
  );
}

export default App;
