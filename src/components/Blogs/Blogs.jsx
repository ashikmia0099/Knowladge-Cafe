import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect ( () => {
        fetch('blogs.json')
        .then (res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1>Konladge Length: {blogs.length} </h1>
            
        </div>
    );
};

export default Blogs;