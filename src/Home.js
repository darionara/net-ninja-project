import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

// We don't want to use this function in our blog site
    /*  const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    } */

    useEffect(() => {
/* I'm using the setTimout function here only to simulate the time when we are waiting the data to fetch from 
API. This is not used in real life :) */
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { isLoading && <div>Loading...</div> }
{/* The code on the right side of 'logical and' will be evaluated only when the left side is true. In our situation
during the first render the blogs value = null so the left side of below code is false so the right side will
never be evaluated. It will only evaluate after updating the state when the data is fetched in the useEffect hook. */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /* handleDelete={handleDelete} */ />}
        </div>
     );
}
 
export default Home;