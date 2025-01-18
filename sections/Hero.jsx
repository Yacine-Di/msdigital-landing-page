import Image from 'next/image';
import hero from '../assets/hero.svg';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto min-h-screen flex" id="home">
            <div className="flex flex-col md:flex-row pt-36 px-6 gap-3 my-auto">
                <div className="mx-auto p-5 flex flex-col basis-1/2 box-border">
                    <p className="text-4xl md:text-5xl text-primary font-bold font-playfair">
                        Augmentez votre chiffre d'affaire de
                        <span className="text-text-primary">
                            {' '}
                            10 à 30 %
                        </span>{' '}
                        grâce à des photos, vidéos et des menus sur mesure
                    </p>
                    <div className="mt-6">
                        <p className="text-xl font-lato">
                            Création de contenu à partir de 500€
                        </p>
                    </div>
                    <a
                        href="#services"
                        className="w-full md:w-1/2 mt-10 p-5 text-center bg-secondary hover:bg-secondary-hover rounded-lg"
                    >
                        <button className="text-white font-bold ">
                            Commencer
                        </button>
                    </a>
                </div>
                <div className="basis-1/2 flex justify-center mx-auto">
                    <Image src={hero} alt="hero-animation" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
