"use client"

import Image from "next/image";
import next_cover from "../../../../public/nextjs-cover.webp"

const Mission = () => {
    return (
        <div className='text-center'>
            <h1 className="text-2xl text-green-500 font-medium">This is mission page</h1>

            <div className="mt-5">
                <Image src={next_cover} alt="Next Cover" quality={100} loading="lazy" placeholder="blur" className="mx-auto rounded-sm" />
            </div>
        </div>
    );
};

export default Mission;