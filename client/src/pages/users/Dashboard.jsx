import React, { useContext, useEffect, useState } from 'react'
import { getUserPosts } from '../../Controllers/post.controller';
import Post from '../../components/Post';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const {user, setUser} = useContext(UserContext)

  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = await getUserPosts();

      setUser({
        email: postData.email,
        posts: postData.posts
      });

      setLoading(false);
    }, 1000);

  }, []);

  const handleDeletePost = (post_id) =>{
    console.log("Post deleted");
  }

  return (
    <section className='card'>

      <h1 className='title'>User Dashboard</h1>

      <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && user.posts && user.posts.map((post) => 
            <div key={post._id}>
              <Post post={post}>
                <div className="flex items-center gap-2">
                  <Link className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200" title="Update" to="/update"></Link>
                  <button className='fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200' title='Delete' onClick={()=>{
                    handleDeletePost(post._id)
                  }}></button>
                </div>
              </Post>
            </div>
          )}
      </div>



    </section>
  )
}

export default Dashboard
