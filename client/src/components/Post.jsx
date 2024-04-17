import React from 'react';

const Post = ({post}) => {
  return (
    <div className='mb-6'>

        <div>
            <div>
                <h2 className='font-bold text-lg text-indigo-600 first-letter:uppercase'>{post.name}</h2>
                <p className='text-[10px] text-slate-500'>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>

            <div>ok</div>
        </div>

        <p className='text-sm'>{post.caption}</p>

        <div className='h-px w-full bg-gradient-to-r from-indigo-50 via-indigo-500 to-indigo-50 mt-6'></div>
    </div>
  );
}

export default Post;
