import React from 'react';
import { ImageList } from './Pages';
import '../style/style.css';


const Lecture = () => {
    return (
       ImageList.map((img) => 
       <div>
        <img  src={ img.image } className='image' style={{ width: 750 }}/>
         <p className='num-page'>{ img.num }</p>
        </div> 
            
            
        
       )
    );
};

export default Lecture;