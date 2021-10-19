import React from 'react';

const Media = () => {
    return (
        <div>
            <video style={{ width: '50%', height: '300px', border: '2px solid #a6c311' }} controls autoPlay loop src="media/healthcare.mp4"></video>
        </div>
    );
};

export default Media;