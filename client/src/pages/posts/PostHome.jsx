import React, { useContext, useEffect, useState } from 'react';
import { getPosts } from '../../Controllers/post.controller';
import { PostContext } from '../../Context/PostContext';
import Post from '../../components/Post';

const PostHome = () => {

  const {posts, setPosts} = useContext(PostContext);

  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = await getPosts();

      setPosts(postData.posts);
      setLoading(false);
    }, 1000);

  }, []);

  return (
    <section className='card'>

        <h1 className='title'>Latest Posts</h1>

        <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && posts && posts.map((post) => 
            <div key={post._id}>
              <Post post={post}></Post>
            </div>
          )}
        </div>

    </section>
  );
}

export default PostHome;
