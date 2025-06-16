import React from 'react'
import Header from './Header'
import backgroundWallpaper from '../assets/background_wallpaper.jpg'; // Import the image


const Browse = () => {
    return (
        <div
            className="relative h-screen w-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black), url(${backgroundWallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Header />
            <div>Browse</div>
        </div>
    )
}

export default Browse
