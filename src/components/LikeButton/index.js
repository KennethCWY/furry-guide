import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState('Like');
    return (
        <button role='Like' onClick={() => setLiked(x => x==='Like' ? x='Liked' : x='Like')}>{liked}</button>
    )
}

export default LikeButton;
