'use client';

import Image from 'next/image';
import { expertiseItems, expertiseSubtitle } from '../utils/constants';
import { motion } from 'framer-motion';
import { fadeInUp, staggered } from '@/utils/animations';
import useIsClient from '@/utils/hooks';
import ScrollingCarousel from '@/components/ScrollingCarousel';
import { photosExample } from '../utils/constants';

const ExpertiseItems = () => {
    return expertiseItems.map(({ id, icon, alt, title, text }) => (
        <motion.div
            key={id}
            variants={fadeInUp}
            className="p-10 bg-white/10 backdrop-blur-lg shadow-xl rounded-md text-white basis-1/3"
        >
            <Image
                width={40}
                height={40}
                src={icon}
                className="mb-4 p-2 box-content rounded-lg border-2 bg-blue-500"
                alt={alt}
            />
            <h3 className="text-xl font-roboto font-bold mb-4">{title}</h3>
            <p className="text-lg font-roboto">{text}</p>
        </motion.div>
    ));
};

const Expertise = () => {
    const isClient = useIsClient();

    return (
        <section
            className="bg-gradient-to-b from-white to-neutral-900 scroll-mt-16 md:scroll-mt-20"
            id="expertise"
        >
            <div className="max-w-7xl p-5 mx-auto flex flex-col align-center">
                <h2 className="text-center font-roboto font-bold text-4xl py-2">
                    Mon expertise
                </h2>
                <p className="p-5 text-xl font-roboto">{expertiseSubtitle}</p>
                {isClient ? (
                    <motion.div
                        className="flex flex-col p-2 gap-4 lg:flex-row max-w-7xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggered}
                    >
                        <ExpertiseItems />
                    </motion.div>
                ) : (
                    <div className="flex flex-col p-2 gap-4 lg:flex-row max-w-7xl">
                        <ExpertiseItems />
                    </div>
                )}
            </div>
            <ScrollingCarousel
                direction="ltr"
                photosExample={photosExample[0]}
            />

            <ScrollingCarousel
                direction="rtl"
                photosExample={photosExample[1]}
            />
        </section>
    );
};

export default Expertise;
