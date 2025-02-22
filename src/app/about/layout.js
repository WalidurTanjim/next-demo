import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            {/* about page navbar starts */}
            <nav className="w-full py-5 flex justify-center items-center">
                <ul className="flex gap-5 items-center justify-center font-semibold text-slate-700 text-sm">
                    <Link href={"/about/mission"}><li className="px-3 py-1 rounded-sm hover:text-slate-500 active:text-slate-700">Mission</li></Link>
                    <Link href={"/about/vision"}><li className="px-3 py-1 rounded-sm hover:text-slate-500 active:text-slate-700">Vision</li></Link>
                    <Link href={"/about/current-position"}><li className="px-3 py-1 rounded-sm hover:text-slate-500 active:text-slate-700">Current Position</li></Link>
                </ul>
            </nav>
            {/* about page navbar ends */}
            
            {/* about dynamic body starts */}
            {children}
            {/* about dynamic body ends */}
        </div>
    );
};

export default layout;