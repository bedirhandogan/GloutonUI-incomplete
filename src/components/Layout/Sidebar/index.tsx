import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './styles.css';

interface SidebarProps {
    title: string;
    homeButton: boolean;
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({title, homeButton, children}) => {
    return (
        <div className={'sidebar container__limit'}>
            <div className={'up-area'}>
                { homeButton && <div className='relative tooltip flex items-center'>
                    <div className='tip'> Home </div>
                    <ArrowSmallLeftIcon className="h-5 w-5 text-fourth hover:text-[#7e7e7e] cursor-pointer duration-100 ease-linear"/>
                </div>}
                <h3 className="text-third">{title}</h3>
            </div>
            {children}
        </div>
    )
}

export default Sidebar;