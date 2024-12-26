import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
    const [menu,setMenue ]=useState("All")
    const [blogs, setBlogs]=useState([])

    const fechBllogs=async ()=>{
      const rsponse = await axios.get('/api/blog')
      setBlogs(rsponse.data.blogs.reverse())
      
    }

    useEffect(()=>{
        fechBllogs();
    },[])
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenue("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenue("Technology")}
        >
          {" "}
          Technology
        </button>
        <button
          className={
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
          onClick={() => setMenue("Startup")}
        >
          {" "}
          Startup
        </button>
        <button
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenue("Lifestyle")}
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BlogList