import React, { useContext, useEffect } from 'react';
import { getPosts } from '../../Controllers/post.controller';
import { PostContext } from '../../Context/PostContext';
import Post from '../../components/Post';

const PostHome = () => {

  const {posts, setPosts} = useContext(PostContext);

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = await getPosts();

      setPosts(postData.posts);
    }, 500);

  }, []);

  return (
    <section className='card'>

        <h1 className='title'>Latest Posts</h1>

        <div>
          {posts && posts.map((post) => 
            <div key={post._id}>
              <Post post={post}/>
            </div>
          )}
        </div>

    </section>
  );
}

export default PostHome;
