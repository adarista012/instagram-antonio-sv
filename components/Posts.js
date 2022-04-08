import { onSnapshot, collection, orderBy, query } from '@firebase/firestore';
import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Post from './Post';

const posts = [
    {
        id: '123',
        username: 'antonio012',
        userImage: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'subscribe and destroy the like button for the yt algoryth!!'
    },
    {
        id: '1234',
        username: 'antonio012',
        userImage: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'subscribe and destroy the like button for the yt algoryth!!'
    },
]


const Posts = () => {
    const [posts, setPosts] = useState([])
     useEffect(() => onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
             setPosts(snapshot.docs)
     }
         
     ), [db])
    return (
        <div>
            {posts.map(post =>(
                <Post
                key={post.id} 
                id={post.id}
                username={post.data().username}
                userImage={post.data().profileImage}
                img={post.data().image}
                caption={post.data().caption}
                />
            ))}
 
        </div>
    );
}

export default Posts;
