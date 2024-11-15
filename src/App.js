
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { UserProvider } from './context/UserContext';


import './App.css'
import Verifyuser from './util/Verifyuser';
import Uploadfile from './components/Uploadfile';
import Docbox from './components/Docbox';
import DocumentCategorise from './components/DocumentCategorise';
import Logout from './components/Logout';

// import Uploaddocument from './component/Uploaddocument';

const App = () => {
  return (
    <UserProvider>  
    
    <Router basename='/charitable/'>   
                
      <Routes>
         <Route path="/register" element={<Register />} />
         <Route path="/signin" element={<Login />} />
         <Route path="/verify" element={<Verifyuser />} /> 
         <Route path="/upload" element={<Uploadfile />} /> 
         <Route path="/docbox" element={<Docbox />} /> 
         <Route path="/progress" element={<DocumentCategorise />} />
         <Route path="/logout" element={<Logout />} />

       </Routes>
     </Router>
   
    </UserProvider>  
  );
};

export default App;
