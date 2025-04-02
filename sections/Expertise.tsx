'use client';

import Image from 'next/image';
import {
    expertiseItems,
    expertiseSubtitle,
    photosExample,
} from '../utils/constants';
import { animate, motion, useMotionValue } from 'framer-motion';
import { fadeInUp, staggered } from '@/utils/animations';
import useIsClient from '@/utils/hooks';
import PhotoCard from '@/components/PhotoCard';
import useMeasure from 'react-use-measure';
import { useEffect, useState } from 'react';

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
            <h3 className="text-xl font-graphik font-bold mb-4">{title}</h3>
            <p className="text-lg font-graphik">{text}</p>
        </motion.div>
    ));
};

const Expertise = () => {
    const isClient = useIsClient();
    const [ref, { width }] = useMeasure();
    const XTranslation = useMotionValue(0);
    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;
    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(
                XTranslation,
                [XTranslation.get(), finalPosition],
                {
                    ease: 'linear',
                    duration:
                        duration * (1 - XTranslation.get() / finalPosition),
                    onComplete: () => {
                        setMustFinish(false);
                        setRerender(!rerender);
                    },
                },
            );
        } else {
            controls = animate(XTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [XTranslation, width, duration, mustFinish, rerender]);

    return (
        <section
            className="bg-gradient-to-b from-white to-neutral-900 scroll-mt-16 md:scroll-mt-20"
            id="expertise"
        >
            <div className="max-w-7xl p-5 mx-auto flex flex-col align-center">
                <h2 className="text-center font-graphik font-bold text-4xl py-2">
                    Mon expertise
                </h2>
                <p className="p-5 text-xl font-graphik">{expertiseSubtitle}</p>
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
            <div className="relative w-full overflow-hidden py-10">
                <motion.div
                    className="flex gap-4 w-max"
                    ref={ref}
                    style={{ x: XTranslation }}
                    onHoverStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    }}
                >
                    {[...photosExample, ...photosExample].map(
                        (photo, index) => (
                            <PhotoCard key={index} image={photo} />
                        ),
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
