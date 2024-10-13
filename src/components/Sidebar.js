import React from 'react'
import '../styles/Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        )
        
    }
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img 
                src="https://plus.unsplash.com/premium_photo-1706569656430-37be43b900e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjBiYWNrZ3JvdW5kJTIwaW1hZ2VzfGVufDB8fDB8fHww" 
                alt="" 
            />
            <Avatar src={user.photoUrl} className="sidebar_avatar">
            {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,448</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar