import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface SidebarProps {
    title: string;
    homeButton: boolean;
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({title, homeButton, children}) => {
    return (
        <div className={'relative w-64 h-full bg-primary container__limit'}>
            <div className={'w-full h-12 border-b border-secondary flex items-center gap-2 p-3'}>
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