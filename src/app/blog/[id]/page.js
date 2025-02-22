import { notFound } from "next/navigation";

const page = async({params}) => {
    const { id } = params;

    let data = null;
    
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        data = await res.json();
    }catch(err){
        console.error(err);
    }

    if(id != data?.id) return notFound();

    return (
        <div className="post container mx-auto px-6 py-14">
            <h1 className="text-slate-600 font-semibold">Post id: {data?.id}</h1>
            <h3 className="text-slate-600 font-semibold">Post user id: {data?.userId}</h3>
            <p className="text-slate-600 font-semibold">Post title: {data?.title}</p>
            <p className="text-slate-600 font-semibold">Post body: {data?.body}</p>
        </div>
    );
};

export default page;