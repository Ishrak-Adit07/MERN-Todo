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

export { getPosts, getUserPosts }