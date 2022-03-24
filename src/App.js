import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard }  from './components/Dashboard/Dashboard';
import  Login  from './components/Login/Login';
import { useState } from 'react';
function App() {
  const [token, setToken] = useState()
  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="container">
      <h1>hello</h1>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
