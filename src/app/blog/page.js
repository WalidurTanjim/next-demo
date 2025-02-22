import BlogCard from "@/components/BlogCard/BlogCard";

const Blog = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return (
        <div className='text-center container mx-auto px-6'>
            <h1 className="text-2xl text-cyan-500 font-medium">This is blog page</h1>

            {/* all posts */}
            <div className="all-posts my-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data?.map(post => <BlogCard key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Blog;