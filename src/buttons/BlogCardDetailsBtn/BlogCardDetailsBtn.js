"use client"
import Link from 'next/link';

const BlogCardDetailsBtn = ({post}) => {

    return (
        <div className='w-full flex items-center justify-center'>
            <Link href={`/blog/${post?.id}`}><button type="button" className="px-4 py-1 border outline-none rounded-md text-sm font-semibold text-slate-700 bg-blue-500 hover:bg-blue-700 active:bg-blue-500">See details..</button></Link>
        </div>
    );
};

export default BlogCardDetailsBtn;