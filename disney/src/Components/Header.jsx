import React from 'react';
import net from './../assets/images/net.png';
import {
    HiMagnifyingGlass,
    HiStar,
    HiPlayCycle,
    HiTv
} from 'react-icons/hi';
import Headertitems from './Headertitems';

function header() {
    const menu =[
        {
            name:'Home',
            icon:HiHome
        },
        {
            name:'Search',
            icon:HiMagnifyingGlass
        },
        {
            name:'Watchlist',
            icon:HiStar
        },
        {
            name:'Originals',
            icon:HiPlayCycle
        },
        {
            name:'Movies',
            icon:HiTv
        }
    ]
  return (
 <div>
       <img src="{net}" className='w-{80px} md:w-{115px} object' />
    {menu.map((item)=>(
       <Headertitems/>
    ))}
 </div>
)
  
}

export default header  