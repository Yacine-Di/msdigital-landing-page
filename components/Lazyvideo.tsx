const LazyVideo = () => {
    return (
        <video
            src="/assets/final.mp4"
            loop
            muted
            typeof="video/mp4"
            className="object-cover min-h-[400px] h-full w-screen z-10"
            autoPlay
            preload="none"
        />
    );
};

export default LazyVideo;
