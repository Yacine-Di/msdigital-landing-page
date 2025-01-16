import Image from 'next/image';
import { expertiseItems } from '../constants/index';

const ExpertiseItems = () => {
    return expertiseItems.map(({ id, icon, alt, title, text }) => (
        <div key={id} className="p-10 bg-footer m-2 rounded-md text-white">
            <Image
                width={40}
                height={40}
                src={icon}
                className="mb-4 p-2 box-content rounded-lg border-2 bg-alternate"
                alt={alt}
            />
            <h3 className="text-xl font-lato font-bold mb-4">{title}</h3>
            <p className="text-lg">{text}</p>
        </div>
    ));
};

const Expertise = () => {
    return (
        <div className="bg-alternate p-5">
            <div className="max-w-7xl mx-auto flex flex-col align-center">
                <h2 className="text-center text-text-secondary text-4xl text-">
                    Mon expertise
                </h2>
                <p className="p-5 text-xl font-lato">
                    Votre restaurant n'a pas de design moderne ? Il est temps de
                    moderniser son image. Avec des photos attrayantes, des
                    vidéos captivantes et des menus actualisés, vous offrirez à
                    vos clients une expérience qui met en valeur l'ambiance et
                    la qualité de vos plats.
                </p>
                <div className="flex flex-col md:flex-row max-w-7xl">
                    <ExpertiseItems />
                </div>
            </div>
        </div>
    );
};

export default Expertise;
