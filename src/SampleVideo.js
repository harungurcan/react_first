import ReactPlayer from "react-player/youtube";

function SampleVideo () {
    const MyVideoUrl = 'https://youtu.be/pCPyFKiEsHw';
    return (
        <div>
            <h1>My Sample Video</h1>
            <ReactPlayer 
            url={MyVideoUrl} 
            />
        </div>
    )
}

export default SampleVideo;


  
