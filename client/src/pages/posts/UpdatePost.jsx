import React, { useContext, useState } from 'react';
import { updatePost } from '../../Controllers/post.controller';
import Alert from '../../components/Alert';
import { PostContext } from '../../Context/PostContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Success from '../../components/Success';

const UpdatePost = () => {

  const {posts, setPosts} = useContext(PostContext);

  const navigate = useNavigate();
  const {state} = useLocation();

  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);

  const [caption, setCaption] = useState(state.post.caption);
  const [body, setBody] = useState(state.post.body);

    const backToDashboard = () =>{
        navigate("/dashboard");
    }

    const handleUpdatePost = async(e) =>{
        e.preventDefault();

        try {

            const data = await updatePost(state.post._id, caption, body);
            console.log(data);
            console.log(data.message);

            setUpdateSuccess(true);
            setError(null);

        } catch (err) {
            setError(err.message);
            setUpdateSuccess(false);
            console.log(err.message);
        }

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
                Edit
            </button>

            <button className='btn mt-10 mb-4' onClick={backToDashboard}>
                Back
            </button>

            {updateSuccess && <Success msg={"Post was updated"}/>}
            {error && <Alert msg={error} />}

        </form>

    </section>
  );
}

export default UpdatePost;
