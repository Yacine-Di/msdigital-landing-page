'use client';

import { reviewItems } from '@/utils/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Reviews = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const translateX = useTransform(scrollYProgress, [0, 1], ['70%', '-100%']);

    return (
        <section className="relative p-2 bg-alternate text-text-secondary">
            <p className="text-4xl font-lato font-bold text-center">
                Témoignages
            </p>
            <div className="h-[300vh]" ref={containerRef}>
                <div className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
                    <motion.div
                        className="flex gap-4 p-4"
                        style={{ x: translateX }}
                    >
                        {reviewItems.map(({ id, title, text, pictures }) => (
                            <motion.div
                                key={id}
                                className="w-[1000px] h-[700px] mt-16 bg-white rounded-xl border-2 border-blue-500"
                            >
                                <p className="text-center text-4xl my-2">
                                    {title}
                                </p>
                                <div className="flex flex-col items-center align-middle p-2 border-2 border-red-500">
                                    <p className="text-xl font-lato my-5 ">
                                        {text}
                                    </p>
                                    <div className="flex justify-between w-full">
                                        {pictures.map((picture, index) => (
                                            <div key={index} className="m-2">
                                                <Image
                                                    alt="photos"
                                                    src={picture}
                                                    width={300}
                                                    height={300}
                                                    className="h-[400px] object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
