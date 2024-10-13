import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import FeedInputOptions from './FeedInputOptions'
import Image from '@mui/icons-material/Image'
import CalendarViewDay from '@mui/icons-material/CalendarViewDay'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import { Avatar } from '@mui/material'
import Post from './Post'
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Create a query that orders posts by 'timestamp' in descending order
        const postsQuery = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        // Listen for real-time updates using the query
        const unsubscribe = onSnapshot(postsQuery, (snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );

        return () => unsubscribe();
    }, []);

    const sendPost = e => {
        e.preventDefault()

        addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp()
        });

        setInput('')
    }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_top">
                <Avatar className='feed_avatar'/>
                <form className='feed_input'>
                    <input 
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder='Start a post' 
                    />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <FeedInputOptions 
                    Icon={Image} 
                    title='Media' 
                    color='#70B5F9'
                />
                <FeedInputOptions 
                    Icon={CalendarMonth} 
                    title='Event' 
                    color='#c37d16'
                />
                <FeedInputOptions 
                    Icon={CalendarViewDay} 
                    title='Write article' 
                    color='#e06847'
                />
            </div>
        </div>

        {/* Posts */}
        <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </FlipMove>
    </div>
  )
}

export default Feed