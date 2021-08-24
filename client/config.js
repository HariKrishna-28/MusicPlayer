import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL = "https://music-player-using-spotify.herokuapp.com/"
})