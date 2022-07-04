import React from 'react';

const Scroll = (prop) => {
    return(
     <div style= {{ overflow: 'scroll', border: '5px solid black ', height: '800px' }}
     >
         {prop.children}
     </div>

    )
      
    
};

export default Scroll;