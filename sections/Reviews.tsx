'use client';

import { staggered, fadeInUp } from '@/utils/animations';
import { reviewItems } from '@/utils/constants';
import useIsClient from '@/utils/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Reviews = () => {
    const isClient = useIsClient();

    return (
        <section
            className="p-5 bg-gradient-to-b from-neutral-500 to-white text-center scroll-mt-16 md:scroll-mt-20"
            id="reviews"
        >
            <h2 className="text-4xl text-white font-roboto font-bold py-2">
                Ils m'ont fait confiance
            </h2>
            {isClient ? (
                <motion.div
                    className="max-w-7xl mx-auto my-2 p-2 flex flex-wrap justify-around gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggered}
                >
                    {reviewItems.map(
                        ({
                            id,
                            restaurantName,
                            text,
                            rating,
                            image,
                            location,
                            serviceProvided,
                            date,
                        }) => (
                            <motion.div
                                key={id}
                                className="max-w-md w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg"
                                variants={fadeInUp}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={image}
                                    alt={restaurantName}
                                    className="w-full h-40 object-contain rounded-lg"
                                />
                                <h3 className="mt-4 text-xl font-bold">
                                    {restaurantName}
                                </h3>
                                <p className="italic mt-2">“{text}”</p>
                                <div className="text-sm text-gray-400 mt-2">
                                    {date}
                                </div>

                                <p className="text-sm text-gray-600 mt-2">
                                    Service utilisé : {serviceProvided}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {location}
                                </p>
                                <div className="mt-4 flex justify-center">
                                    {Array.from({
                                        length: Math.round(rating),
                                    }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-yellow-500"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ),
                    )}
                </motion.div>
            ) : (
                <div className="max-w-7xl mx-auto my-2 flex flex-wrap justify-around gap-6">
                    {reviewItems.map(
                        ({
                            id,
                            restaurantName,
                            text,
                            rating,
                            image,
                            location,
                            serviceProvided,
                            date,
                        }) => (
                            <div
                                key={id}
                                className="max-w-md w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={restaurantName}
                                    className="w-full h-40 object-contain rounded-lg"
                                />
                                <h3 className="mt-4 text-xl font-bold">
                                    {restaurantName}
                                </h3>
                                <p className="italic mt-2">“{text}”</p>
                                <div className="text-sm text-gray-400 mt-2">
                                    {date}
                                </div>

                                <p className="text-sm text-gray-600 mt-2">
                                    Service utilisé : {serviceProvided}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {location}
                                </p>
                                <div className="mt-4 flex justify-center">
                                    {Array.from({
                                        length: Math.round(rating),
                                    }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-yellow-500"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            )}
        </section>
    );
};

export default Reviews;
