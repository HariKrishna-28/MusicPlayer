import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a55eecdff1ff4bf28749ee4977f2d2a3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <div className='flex justify-center items-center' style={{ minHeight: '100vh' }}>
            <a className=' no-underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href={AUTH_URL} >Login With Spotify</a>
        </div>
    )
}

export default Login
