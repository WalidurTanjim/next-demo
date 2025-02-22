"use client"

import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className='not-found w-full h-screen flex items-center justify-center'>
            <div>
                <h1 className="text-2xl font-medium text-slate-700 mb-3">Page not found!</h1>
                <button type="button" onClick={() => router.push("/")} className="outline-none border rounded-md px-5 py-1.5 text-sm hover:bg-gray-100 active:bg-transparent">Go home</button>
            </div>
        </div>
    );
};

export default NotFound;