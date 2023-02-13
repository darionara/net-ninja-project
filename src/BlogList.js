const BlogList = ({ blogs, title, handleDelete }) => {
    /*  If I put (props) as an argument, instead of { blog, title }, I will need to use the below code to 
        use these props  */
    // const blogs = props.blogs;
    // const title= props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
{/* I am  using the anonymous function not to fire this function on the first render but on the mouse click*/}
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;