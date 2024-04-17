import React, { useEffect } from 'react';
import { getPosts } from '../../Controllers/post.controller';

const PostHome = () => {

  useEffect(()=>{

    setTimeout(async()=>{
      const postData = await getPosts();
      console.log(postData);
    }, 500);

  }, []);

  return (
    <section className='card'>

        <h1 className='title'>Latest Posts</h1>

        <div>posts</div>

    </section>
  );
}

export default PostHome;
