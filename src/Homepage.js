function Homepage() {
    const randomUrl= "https://picsum.photos/200";
    return (
        <div>
            <h1>Welcome to my site</h1>
            <img
                src={randomUrl}
                alt="an image"
            />
        </div>
    )
}

export default Homepage;