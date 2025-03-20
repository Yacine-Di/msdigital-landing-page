import CtaButton from '@/components/CtaButton';

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
                    autoPlay
                />
                <div className="w-full h-full top-0 flex flex-col p-5 justify-center items-center absolute">
                    <p className="max-w-7xl text-4xl md:text-5xl text-white/70 text-center font-bold font-playfair">
                        Augmentez votre chiffre d'affaire de{' '}
                        <span className="text-green-500">10 à 30 %</span> grâce
                        à des photos, vidéos et des menus sur mesure
                    </p>
                    <div className="mt-6">
                        <p className="text-xl text-white/70 font-lato">
                            Création de contenu à partir de 590€
                        </p>
                    </div>
                    <CtaButton />
                </div>
            </div>
        </section>
    );
};

export default Hero;
