import Image from 'next/image';
import React from 'react';
import MainBefore from '../../../public/images/MainBefore.jpg';

const ImagePage: React.FC = () => {
    return (
        <div>
            <h1>Image Page</h1>
            <Image
                src={MainBefore}
                alt="Main Before"
                fill // full screen
                quality={50}  // Image quality
                priority // Load image first
                placeholder='blur' // Show blur image
                // style={{ width: '80%', height: '100%' }} // Image style
                
            />
        </div>
    );
};

export default ImagePage;