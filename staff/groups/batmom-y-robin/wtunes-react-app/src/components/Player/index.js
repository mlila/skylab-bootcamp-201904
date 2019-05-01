import React from 'react'
import './index.sass'

function Player({ url }) {

    return <div className="footer">
        <audio src={url} controls autoPlay/>
    </div>
}

export default Player
