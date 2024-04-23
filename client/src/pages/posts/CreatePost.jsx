import React, { useState } from 'react';
import { createPost } from '../../Controllers/post.controller';
import Alert from '../../components/Alert';

const CreatePost = () => {

  const [error, setError] = useState(null);

  const [caption, setCaption] = useState("");
  const [body, setBody] = useState("");

    const handleCreatePost = async(e) =>{
        e.preventDefault();
        console.log("Post created");
        console.log(caption, body);

        try {

            const data = await createPost(caption, body);
            console.log(data);

        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }

        setError(null);

    }

  return (
    <section className='card'>
        <h1 className='caption'>Create a new post</h1>

        <form onSubmit={handleCreatePost}>
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

export default CreatePost;
