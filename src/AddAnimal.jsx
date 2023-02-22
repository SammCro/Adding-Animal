import React, { useState } from 'react';

import bird from './Assets/bird.svg';
import cat from './Assets/cat.svg';
import cow from './Assets/cow.svg';
import dog from './Assets/dog.svg';
import gator from './Assets/gator.svg';
import horse from './Assets/horse.svg';
import heart from './Assets/heart.svg';


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
  }  

function AddAnimal({type}){
    const [heartSize,setHeart] = useState(0);
    const [heartHidden,setHeartHidden] = useState(true);

    const handleImageClick = () =>{
        setHeartHidden(false);
        if(heartSize<75){
            setHeart(heartSize+25);
        }
    }

    return(
        <div  onClick={handleImageClick}>
            <img src={svgMap[type]} alt='animal' width={'100px'} height={'100px'}></img>
            <img src={heart} width={heartSize} height={heartSize} alt="heart" hidden={heartHidden}></img>
        </div>
    )
}

export default AddAnimal;