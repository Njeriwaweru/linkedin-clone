import React, { forwardRef } from 'react'
import '../styles/Post.css'
import { Avatar } from '@mui/material'
import FeedInputOptions from './FeedInputOptions'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@mui/icons-material'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <FeedInputOptions Icon={ThumbUpOutlined} title="Like"
          color="gray"
        />
        <FeedInputOptions Icon={ChatOutlined} title="Comment"
          color="gray"
        />
        <FeedInputOptions Icon={ShareOutlined} title="Share"
          color="gray"
        />
        <FeedInputOptions Icon={SendOutlined} title="Send"
          color="gray"
        />
      </div>
    </div>
  )
})

export default Post