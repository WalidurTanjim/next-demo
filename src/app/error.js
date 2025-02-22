"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
    const router = useRouter();

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div>
                <h1>Something went wrong, error found!</h1>
                <div className="mt-2 flex gap-2 items-center justify-center">
                    <button type="button" onClick={() => reset()} className="outline-none border rounded-md px-5 py-1 text-sm font-medium hover:bg-slate-100 active:bg-transparent">Try Again</button>

                    <button type="button" onClick={() => router.push('/')} className="outline-none border rounded-md px-5 py-1 text-sm font-medium hover:bg-slate-100 active:bg-transparent">Go Home</button>
                </div>
            </div>
        </div>
    );
};

export default Error;