import React from 'react';
import './App.css';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <div className="apps">
      <div className="d-md-flex ">
        <div className="p-4">
<h1 style={{marginLeft:130,marginTop:70,color:"white"}}>Welcome!</h1>
<h5 style={{marginLeft:130,marginTop:20,color:"white"}}>Material Login Form #02</h5>
<h6 style={{marginTop:390,color:"white",marginLeft:120}}> Designed  by  @ygohel18 </h6>
        </div>
        <div className="p-8" className='app'>
      <Login />
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;