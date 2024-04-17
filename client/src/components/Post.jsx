import React from 'react';

const Post = ({post, children}) => {
  return (
    <div className='mb-6'>

        <div className='flex items-start justify-between'>
            <div>
                <h2 className='font-bold text-lg text-indigo-600 first-letter:uppercase'>{post.name}</h2>
                <p className='text-[10px] text-slate-500 mb-1'>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>

            <div>{children}</div>
        </div>

        <p className='text-sm'>{post.caption}</p>

        <div className='h-px w-full bg-gradient-to-r from-indigo-50 via-indigo-500/70 to-indigo-50 mt-6'></div>
    </div>
  );
}

export default Post;
