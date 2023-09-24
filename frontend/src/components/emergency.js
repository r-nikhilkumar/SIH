import React from 'react';
import { Link } from 'react-router-dom';
function emergency() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontSize:'60px'}}>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h1 style={{color:'red'}}>Call 100 </h1>
    </div>
    <Link to="/">
        <button style={{fontSize:'20px',color:'lightblue'}}>HomePage</button>
      </Link>
    </div>
  );
}

export default emergency;
