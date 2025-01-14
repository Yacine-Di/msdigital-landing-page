import Image from 'next/image';
import hero from '../assets/hero.svg';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row basis-1/2  min-h-fit mt-36 justify-center px-6 gap-3">
            <div className="mx-auto p-5 flex flex-col basis-1/2 ">
                <p className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold font-playfair ">
                    Augmentez vos réservations de
                    <span className="text-text-primary"> 20 %</span> grâce à des
                    photos, vidéos et des menus sur-mesure
                </p>
                <a
                    href="#services"
                    className="w-full md:w-1/2 mt-10 p-5 text-center bg-secondary hover:bg-secondary-hover rounded-lg"
                >
                    <button className="text-white font-bold ">Commencer</button>
                </a>
            </div>
            <div className="basis-1/2 mx-auto">
                <Image src={hero} alt="hero-animation" />
            </div>
        </section>
    );
};

export default Hero;
