'use client';

import Image from 'next/image';
import { expertiseItems, expertiseSubtitle } from '../utils/constants';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import useIsClient from '@/utils/hooks';

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
    const isClient = useIsClient();

    return (
        <section className="bg-default p-5">
            {isClient ? (
                <motion.section
                    variants={fadeIn}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.5 }}
                    className="max-w-7xl mx-auto flex flex-col align-center"
                >
                    <h2 className="text-center text-text-secondary font-lato font-bold text-4xl">
                        Mon expertise
                    </h2>
                    <p className="p-5 text-xl font-lato">{expertiseSubtitle}</p>
                    <div className="flex flex-col md:flex-row max-w-7xl">
                        <ExpertiseItems />
                    </div>
                </motion.section>
            ) : (
                <section className="max-w-7xl mx-auto flex flex-col align-center">
                    <h2 className="text-center text-text-secondary font-lato font-bold text-4xl">
                        Mon expertise
                    </h2>
                    <p className="p-5 text-xl font-lato">{expertiseSubtitle}</p>
                    <div className="flex flex-col md:flex-row max-w-7xl">
                        <ExpertiseItems />
                    </div>
                </section>
            )}
        </section>
    );
};

export default Expertise;
