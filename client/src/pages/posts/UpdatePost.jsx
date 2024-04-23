import React, { useContext, useState } from 'react';
import { createPost } from '../../Controllers/post.controller';
import Alert from '../../components/Alert';
import { PostContext } from '../../Context/PostContext';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdatePost = () => {

  const {posts, setPosts} = useContext(PostContext);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const [error, setError] = useState(null);

  const [caption, setCaption] = useState("");
  const [body, setBody] = useState("");

    const handleUpdatePost = async(e) =>{
        e.preventDefault();

        // try {

        //     const data = await createPost(caption, body);
        //     console.log(data.newPost);

        //     setPosts(...posts, data.newPost);

        //     navigate("/dashboard");

        // } catch (err) {
        //     setError(err.message);
        //     console.log(err.message);
        // }

        setError(null);

    }

  return (
    <section className='card'>
        <h1 className='caption'>Update  your post</h1>

        <form onSubmit={handleUpdatePost}>
            <input type='text' 
                   placeholder='Post caption' 
                   value={caption}
                   onChange={(e) => setCaption(e.target.value)}
                   className='input' 
                   autoFocus />
            <textarea rows="5" 
                      placeholder='Post content' 
                      className='input'
                      value={body}
                      onChange={(e) => setBody(e.target.value)}></textarea>

            <button className='btn' type='submit'>
                Submit
            </button>

            {error && <Alert msg={error}/>}

        </form>
    </section>
  );
}

export default UpdatePost;
