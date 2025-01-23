const Hero = () => {
    return (
        <section className="mx-auto min-h-screen pt-16 md:pt-20 flex" id="home">
            <div className=" relative">
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <video
                    src="/assets/final.mp4"
                    loop
                    muted
                    typeof="video/mp4"
                    className="object-cover h-screen w-screen"
                />
                <div className="w-full h-full top-0 flex flex-col p-5 justify-center items-center absolute">
                    <p className="max-w-7xl text-4xl md:text-5xl text-white/70 text-center font-bold font-playfair">
                        Augmentez votre chiffre d'affaire de{' '}
                        <span className="text-white">10 à 30 %</span> grâce à
                        des photos, vidéos et des menus sur mesure
                    </p>
                    <div className="mt-6">
                        <p className="text-xl text-white font-lato">
                            Création de contenu à partir de 499€
                        </p>
                    </div>
                    <a
                        href="#services"
                        className="md:w-1/4 w-1/2 mt-10 p-5 text-center bg-secondary hover:bg-secondary-hover rounded-lg"
                    >
                        <button className="text-white font-bold">
                            Commencer
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
