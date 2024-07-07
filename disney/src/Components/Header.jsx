import React from 'react';
import net from './../assets/images/net.png';
import {
    HiMagnifyingGlass,
    HiStar,
   
    HiTv
} from 'react-icons/hi2';


function Header() {
    const menu = [
        {
            name: 'Home',
            icon: HiMagnifyingGlass
        },
        {
            name: 'Search',
            icon: HiStar
        },
        // {
        //     name: 'Watchlist',
        //     icon: HiPlayCycle
        // },
        {
            name: 'Originals',
            icon: HiTv
        },
        {
            name: 'Movies',
            icon: HiTv
        }
    ];

    return (
        <div>
            <img src={net} className='w-80px md:w-115px object-cover' alt="Netflix Logo" />
            {menu.map((item, index) => (
                <HeaderItems key={index} name={item.name} icon={item.icon} />
            ))}
        </div>
    );
}

export default Header;
