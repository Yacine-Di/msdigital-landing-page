import Image from 'next/image';
import logo from '../assets/logo.png';

const About = () => {
    return (
        <section className="bg-alternate p-5">
            <div className="max-w-7xl mx-auto">
                <p className="text-center font-lato font-bold text-text-secondary text-4xl my-2">
                    Qui sui-je ?
                </p>
                <div className=" text-center flex flex-col md:flex-row justify-between">
                    <div className="md:basis-1/2 my-2">
                        <Image
                            src={logo}
                            alt="logo"
                            width={300}
                            height={300}
                            className="w-1/2 mx-auto object-cover"
                        />
                    </div>
                    <p className="font-lato text-2xl md:basis-1/2 my-auto">
                        Je m’appelle Hmed et je fais du montage vidéo et photo
                        depuis près de 5 ans. J’ai travaillé avec des YouTubeurs
                        connus, des restaurants et des snacks, ce qui m’a permis
                        d’acquérir une solide expérience. En dehors de mon
                        activité, j’aime peindre, une passion qui nourrit ma
                        créativité au quotidien.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
