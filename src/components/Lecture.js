import React from 'react';
import { ImageList } from './Pages';
import '../style/style.css';


const Lecture = () => {
    return (
       ImageList.map((img) => 
       <div>
        <img className='image' src={ img.image } />
        <p className='num-page'>{ img.num }</p>
        </div>
            
            
        
       )
    );
};

export default Lecture;