import React, { useContext, useEffect, useState } from 'react'
import { getUserPosts } from '../../Controllers/post.controller';
import Post from '../../components/Post';
import { UserContext } from '../../Context/UserContext';

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

  return (
    <section className='card'>

      <h1 className='title'>User Dashboard</h1>

      <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && user.posts && user.posts.map((post) => 
            <div key={post._id}>
              <Post post={post}></Post>
            </div>
          )}
      </div>



    </section>
  )
}

export default Dashboard
