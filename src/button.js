import React, { Children } from 'react'
function button({ children, type }){ 
  return (  
  <button className='buttonstyle'>
  {children}
  </button>
);
}

export default button