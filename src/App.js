

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllUsers } from './pages/AllUsers';
import { Dashboard } from './pages/Dashboard';
import { Logout } from './pages/Logout';
import { Registration } from './pages/Registration';
import { MainRegister } from './pages/MainRegister';
import { Reports } from './pages/Reports';
import { Scanner } from './pages/Scanner';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Login } from './pages/Login'; 
import {ViewUser} from './pages/ViewUser'; 
import {EditUser} from './pages/EditUser'; 

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/allusers' element={<AllUsers />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/' element={<MainRegister />} />
          <Route path='/scanner' element={<Scanner />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users/view/:id' element={<ViewUser />} /> 
          <Route path='/users/edit/:id' element={<EditUser />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
