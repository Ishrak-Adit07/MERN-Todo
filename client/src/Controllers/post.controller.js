const getPosts = async() =>{

    const response = await fetch("api/post");
    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;

}

const getUserPosts = async() =>{

    const response = await fetch("api/post/user", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        },
    });
    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;
}

const createPost = async(caption, body) =>{
    if(!caption || !body){
        throw Error("All field are required");
    }

    const response = await fetch("/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        },
        body: JSON.stringify({caption, body})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;
}

const deletePost = async(_id) =>{

    const response = await fetch("/api/post", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        },
        body: JSON.stringify({id: _id})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;
}

export { getPosts, getUserPosts, createPost, deletePost }