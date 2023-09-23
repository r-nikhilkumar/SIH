import React from 'react';
import hos from '../images/hos1.jpg';
import { Link } from 'react-router-dom';
import f1 from '../images/f1.png'
function HomePage() {
  return (
    <div className='main'style={{display:'flex',alignItems:'center',flexDirection:'column',fontSize:'60px'}}>
    <div className='w'style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <h1 className='wh1'>Welcome!</h1>
      <p className='wp1'>This is free online consultation app</p> 
    </div>
    <Link to="/login">
        <button style={{fontSize:'20px',backgroundColor:'transparent'}}><img src={f1} alt='fingerprint'style={{width:'400px'}} /></button>
      </Link>
    </div>
  );
}

export default HomePage;
