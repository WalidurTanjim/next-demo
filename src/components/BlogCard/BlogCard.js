import BlogCardDetailsBtn from "@/buttons/BlogCardDetailsBtn/BlogCardDetailsBtn";

const BlogCard = ({ post }) => {
    return (
        <div className='post p-2 rounded-md border hover:shadow-md'>
            <p className="text-sm text-slate-700 font-semibold">Id: <span className="text-blue-500">{post?.id}</span></p>
            <h3 className="text-slate-800 my-2">{post?.title}</h3>
            <BlogCardDetailsBtn post={post} />
        </div>
    );
};

export default BlogCard;