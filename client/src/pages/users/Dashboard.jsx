import React, { useContext, useEffect, useState } from 'react'
import { deletePost, getUserPosts } from '../../Controllers/post.controller';
import Post from '../../components/Post';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom'
import Alert from '../../components/Alert';
import Success from '../../components/Success';

const Dashboard = () => {

  const {user, setUser} = useContext(UserContext)

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

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

  const handleDeletePost = async(_id) =>{
    try {

      const data = await deletePost(_id);
      console.log(data.message);

      setTimeout(async()=>{
        setLoading(true);  
        
        location.reload();
  
        setLoading(false);
      }, 1000);

      setDeleteSuccess(true);

      setError(null);

    } catch (err) {
      setError(err.error);
      console.log(err);
    }
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
                  <Link className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200" title="Update" to="/updatePost"
                  state={{post}}></Link>
                  <button className='fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200' title='Delete' onClick={()=>{
                    handleDeletePost(post._id)
                  }}></button>
                </div>
              </Post>
            </div>
          )}

          {deleteSuccess && <Success msg={"Post was deleted"}/>}
          {error && <Alert msg={error} />}
      </div>



    </section>
  )
}

export default Dashboard
