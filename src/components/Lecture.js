import React from 'react';
import { ImageList } from './Pages';
import '../style/style.css';


const Lecture = () => {
    return (
       ImageList.map((img) => 
       <div className='page'>
        <img  src={ img.image } className={ img.double ? 'd' : 'image' }/>
         <p className='num-page'>{ img.num }</p>
        </div> 
            
            
        
       )
    );
};

export default Lecture;