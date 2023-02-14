import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    /*  const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    } */

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setBlogs(data);
        });
    }, []);

    return ( 
        <div className="home">
{/* The code on the right side of logical and will be evaluated only when the left side is true. In our situation
during the first render the blogs value = null so the left side of below lolow code is false so the right side will
never be evaluted. It will only evaluate after updating the state when the data is fetched in the useEffect hook. */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={handleDelete} */ />}
        </div>
     );
}
 
export default Home;