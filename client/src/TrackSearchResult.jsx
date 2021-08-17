import React from 'react'

const TrackSearchResult = ({ track, chooseTrack }) => {
    function handlePlay() {
        chooseTrack(track)
    }

    return (
        <div className='flex m-2 items-center cursor-pointer' onClick={handlePlay}>
            <img src={track.albumUrl} alt="artist" style={{ height: "64px", width: "64px" }} />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}
                </div>
            </div>
        </div>
    )
}

export default TrackSearchResult
