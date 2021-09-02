require("dotenv").config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const lyricsFinder = require('lyrics-finder')
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path')
const baseUrl = "https://music-player-using-spotifyapi.herokuapp.com"



const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// //  heroku config
// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

// app.get("/", (req, res) => {
//     res.send("servers up and running")
// })

app.post(`${baseUrl}/refresh`, (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken

    })
    spotifyApi.
        refreshAccessToken().
        then(
            (data => {
                res.json({
                    accessToken: data.body.accessToken,
                    expiresIn: data.body.expiresIn,
                })
                // console.log(data.body)
                // spotifyApi.setAccessToken(data.body['access_token'])
            }).catch(() => {
                res.sendStatus(400)
            }))

})


// npm run devStart


app.post(`${baseUrl}/login`, (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
            .catch(() => {
                res.sendStatus(400)
            })
    })
})

app.get(`${baseUrl}/lyrics`, async (req, res) => {
    const lyrics = await lyricsFinder(req.query.artist, req.query.track) || "Oops! No lyrics Found"
    res.json({ lyrics })
})

app.listen(process.env.PORT || 5000)