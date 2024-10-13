import React from 'react'
import '../styles/Widgets.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="widgets_articleLeft">
                    <FiberManualRecord />
                </div>

                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>

        {newsArticle("React is fun!", "Top news - 9099 readers")}
        {newsArticle("JavaScript Trends 2024", "Latest update - 12,453 readers")}
        {newsArticle("AI Revolution in Coding", "Breaking news - 15,300 readers")}
        {newsArticle("How to Master Redux", "Top article - 9,876 readers")}
        {newsArticle("Best Practices for Firebase", "Developer tips - 7,450 readers")}
    </div>
  )
}

export default Widgets