'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { aboutItems } from '@/utils/constants';
import CtaButton from '@/components/CtaButton';

const About = () => {
    return (
        <section
            className="bg-gradient-to-b from-neutral-900 to-neutral-500 p-8 scroll-mt-16 md:scroll-mt-20"
            id="about"
        >
            <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-center font-bold text-white text-4xl mb-6 font-graphik">
                    À propos
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="basis-1/2">
                        <h3 className="text-center font-bold text-white text-2xl mb-4">
                            Qui suis-je ?
                        </h3>
                        <div className="flex flex-col items-center gap-8">
                            <p className=" text-lg md:text-xl text-white leading-relaxed">
                                {aboutItems.description}
                            </p>
                        </div>
                    </div>

                    <div className="basis-1/2 flex flex-col items-center text-center md:text-right gap-4">
                        <p className=" text-xl text-center font-semibold text-white">
                            {aboutItems.callToAction}
                        </p>
                        <CtaButton />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
