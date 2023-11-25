import './App.css';
import UserForm from './Components/UserForm';
import SelfFamilyTab from './Components/SelfFamilyTab';
import DataTable from './Components/DataTable';
import { Routes, Route } from 'react-router-dom';
import SelfForm from './Components/SelfForm';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App-container">
      <Routes>
        <Route exact path='/' element={<SelfFamilyTab />} />
        <Route path='/selfform' element={<SelfForm />} />
        <Route path='/userform' element={<UserForm />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App;
