'use client';

import Image from 'next/image';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';

const About = () => {
    return (
        <section className="bg-default p-5 scroll-mt-20" id="about">
            <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-7xl mx-auto md:block"
            >
                <p className="text-center font-lato font-bold text-text-secondary text-4xl py-2">
                    Qui sui-je ?
                </p>
                <div className=" flex flex-col md:flex-row justify-between">
                    <Image
                        src={logo}
                        alt="logo"
                        width={300}
                        height={300}
                        className="h-[300px] w-[300px] p-2 my-2 mx-auto object-cover"
                    />
                    <p className="font-lato text-2xl md:basis-1/2 my-auto">
                        Je suis MSDesign et je fais du montage vidéo et photo
                        depuis près de 7 ans. J’ai travaillé avec des YouTubeurs
                        connus, des restaurants et des snacks, ce qui m’a permis
                        d’acquérir une solide expérience. En dehors de mon
                        activité, j’aime peindre, une passion qui nourrit ma
                        créativité au quotidien.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
