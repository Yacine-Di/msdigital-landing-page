'use client';

import Image from 'next/image';
import { expertiseItems } from '../constants/index';
import { motion } from 'framer-motion';

const ExpertiseItems = () => {
    return expertiseItems.map(({ id, icon, alt, title, text }) => (
        <div
            key={id}
            className="p-10 bg-footer m-2 rounded-md text-white basis-1/3"
        >
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
        <section className="bg-alternate p-5">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto flex flex-col align-center"
            >
                <h2 className="text-center text-text-secondary text-4xl">
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
            </motion.section>
        </section>
    );
};

export default Expertise;
