import './App.css';
import UserForm from './Components/UserForm';
import SelfFamilyTab from './Components/SelfFamilyTab';
import DataTable from './Components/DataTable';
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

function App() {
  // const history = useHistory();
  // useEffect(() => {
  //   history.push('/');
  // }, [history]);

  return (
    <div className="App-container">
      <Routes>
        <Route exact path='/' element={<SelfFamilyTab />} />
        <Route path='/userform' element={<UserForm />} />
        <Route path='/datatable' element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App;
