import myPhoto from "./assets/images/harun_photo.jpg";
function AboutMe() {
    const randomUrl= "https://picsum.photos/200";
    return (
        <div>
            <h1>About Me</h1>
            <img
                src={myPhoto}
                alt="an image"
                height="200"
            />
        </div>
    )
}

export default AboutMe;