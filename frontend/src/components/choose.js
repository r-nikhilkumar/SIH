import React from 'react';
import { Link } from 'react-router-dom';
function choose() {
  return (
    <div style={{display:'flex',flexDirection:'row',width:'40vw',justifyContent:'space-between'}}>
        <Link to="/consult">
            <button style={{backgroundColor:'blue',fontSize:'50px'}}>Consult</button>
        </Link>
        <Link to="/emergency">
            <button style={{backgroundColor:'red',fontSize:'50px'}}className='emr'>Emergency</button>
        </Link>
    </div>
  );
}

export default choose;
